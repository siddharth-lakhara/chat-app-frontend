import constants from '../sagas/backendConstants';
import {userLoginSuccess, userLoginFail} from '../redux/actions';

const serverActions = {
  [constants.USER_LOGIN_SUCCESS]: (dispatch, {userName}) => {
    dispatch(userLoginSuccess(userName));
  },
  [constants.USER_LOGIN_FAIL]: (dispatch, {userName}) => {
    dispatch(userLoginFail(userName));
  }
};

export default serverActions;