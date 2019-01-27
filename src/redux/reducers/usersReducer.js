import types from '../types';

export const usersReducer = (state = {
  usersList: ['allen', 'swayam', 'titas'],
  currentUser: 'siddharth',
  selectedUser: 'swayam',
  history: {
    swayam: {
      messages: [{from: 'swayam', to: 'siddharth', msg: 'Hi'}],
      currentText: '',
    },
  },
}, {type, payload}) => {
  switch (type) {
    case types.USERS_UPDATE: 
      return {...state, usersList: payload};
    case types.USER_CHANGE: 
      return {...state, selectedUser: payload};
    case types.TEXT_UPDATE:
      console.log('value', payload);
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
    case types.SEND_MSG: 
      return {...state}
    default:
      return state;
  }
};

export default usersReducer;