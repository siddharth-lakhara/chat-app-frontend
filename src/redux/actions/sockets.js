import types from '../types';

export const socketOpen = () => ({
  type: types.SOCKET_OPEN,
});

export const socketClose = () => ({
  type: types.SOCKET_CLOSE,
});
