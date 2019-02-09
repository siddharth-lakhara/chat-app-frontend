import { userLoginSuccess, userLoginFail, usersUpdate, receiveMessage} from '../redux/actions';
import types from '../redux/types';

const serverActions = {
  [types.USER_LOGIN_SUCCESS]: (dispatch, {userName}) => {
    dispatch(userLoginSuccess(userName));
  },
  [types.USER_LOGIN_FAIL]: (dispatch, {userName}) => {
    dispatch(userLoginFail(userName));
  },
  [types.USERS_UPDATE]: (dispatch, {usersList}) => {
    dispatch(usersUpdate(usersList));
  },
  [types.RCV_MSG]: (dispatch, payload) => {
    dispatch(receiveMessage(payload));
  }
};

export default serverActions;