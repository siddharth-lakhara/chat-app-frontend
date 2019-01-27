import types from '../types';

const socketOpenReducer = (state={
  socketOpen: false,
}, actions) => {
  switch (actions.type) {
    case types.SOCKET_OPEN:
      console.log('socket opened');
      return {...state, socketOpen: true};
    default :
      return state;
  }
}

export default socketOpenReducer;