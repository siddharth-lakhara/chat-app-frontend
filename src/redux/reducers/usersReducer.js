import types from '../types';

export const usersReducer = (state = {
  usersList: ['allen', 'swayam', 'titas'],
  currentUser: 'siddharth',
  selectedUser: 'swayam',
  history: {
    swayam: {
      messages: [{from: 'swayam', to: 'siddharth', msg: 'Hi'}],
      currentText: 'ypp',
    },
  },
}, {type, payload}) => {
  switch (type) {
    case types.USERS_UPDATE: 
      return {...state, usersList: payload};
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
      const from = state.currentUser;
      const to = state.selectedUser;
      const msg = state.history[state.selectedUser].currentText;
      const newMessage = {
        from,
        to,
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
    default:
      return state;
  }
};

export default usersReducer;