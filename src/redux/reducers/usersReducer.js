import types from '../types';

export const usersReducer = (state = {
  userLoggedIn: false,
  loginError: '',
  usersList: [],
  currentUser: '',
  selectedUser: '',
  history: {
    swayam: {
      messages: [{from: 'swayam', to: 'user2', msg: 'Test message',
      }],
      currentText: '',
    }
  },
}, {type, payload}) => {
  switch (type) {
    case types.USERS_UPDATE:
      const newUsersList = payload.filter((userName) => (!(userName === state.currentUser)));
      const {history} = state;
      Object.keys(history).map((userName) => {
        // if user went offline
        if (newUsersList.indexOf(userName) === -1) {
          delete history[userName];
          if (userName === state.selectedUser) {
            state.selectedUser = '';
          }
        }
      });
      newUsersList.forEach(userName => {
        if (!history.hasOwnProperty(userName)) {
          history[userName] = {
            messages: [],
            currentText: '',
          };
        }
      });
      return {
        ...state,
        usersList: newUsersList,
      };
    case types.USER_CHANGE: 
      return {...state, selectedUser: payload};
    case types.TEXT_UPDATE:
      return {
        ...state, 
        history: {
          ...state.history,
          [state.selectedUser]: {
            ...state.history[state.selectedUser],
            currentText: payload,
          }
        }
      };
    case types.UPDATE_HISTORY: 
      const msg = state.history[state.selectedUser].currentText;
      const newMessage = {
        from: state.currentUser,
        to: state.selectedUser,
        msg,
      };
      state.history[state.selectedUser].messages.push({...newMessage});
      return {
        ...state,
        history: {
          ...state.history,
          [state.selectedUser]: {
            ...state.history[state.selectedUser],
            currentText: '',
          }
        }
      }
    case types.USER_LOGIN_SUCCESS:
      return {
        ...state,
        userLoggedIn: true,
        currentUser: payload.userName,
        loginError: '',
      }
    case types.USER_LOGIN_FAIL: 
      return {
        ...state,
        loginError: `user name ${payload.userName} is already taken`,
      };
    case types.RCV_MSG:
      console.log('rcv msg');
      const newPayload = {
        from: payload.from,
        to: payload.to,
        msg: payload.data,
      };
      state.history[payload.from].messages.push({ ...newPayload });
      return {
        ...state,
        history: {
          ...state.history,
          [payload.from]: {
            ...state.history[payload.from],
            currentText: '',
          }
        }
      };

    default:
      return state;
  }
};

export default usersReducer;