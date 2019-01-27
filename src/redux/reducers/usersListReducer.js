import types from '../types';

export const usersListReducer = (state = {
  usersList: ['siddharth', 'swayam', 'titas'],
  currentUser: '',
  selectedUser: 'swayam',
}, {type, payload}) => {
  switch (type) {
    case types.USERS_UPDATE: 
      return {...state, usersList: payload};
    case types.USER_CHANGE: 
      return {...state, selectedUser: payload};
    default:
      return state;
  }
};

export default usersListReducer;