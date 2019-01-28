import { takeEvery } from 'redux-saga/effects';
import types from '../redux/types';
import constants from './backendConstants';

const rootSaga = function* rootSaga(params) {
  yield takeEvery(types.SEND_MSG, (actions) => {
    const state = params.getState();
    const userName = state.users.currentUser;
    const {selectedUser, currentText} = actions.payload;
    params.socket.send(JSON.stringify({
      type: constants.SEND_MSG,
      from: userName,
      to: selectedUser,
      data: currentText,
    }));
  });

  yield takeEvery(types.USER_LOGIN, (actions) => {
    const {userName} = actions.payload;
    params.socket.send(JSON.stringify({
      type: constants.ADD_USERS,
      userName,
    }));
  })
};

export default rootSaga;