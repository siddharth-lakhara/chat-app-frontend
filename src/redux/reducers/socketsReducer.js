import types from '../types';

export const socketsReducer = (state={
  socketOpen: false,
}, actions) => {
  switch (actions.type) {
    case types.SOCKET_OPEN:
      console.log('socket opened');
      return {...state, socketOpen: true};
    case types.SOCKET_CLOSE:
      console.log('socket closed');
      return {...state, socketOpen: false};
    default :
      return state;
  }
}

export default socketsReducer;