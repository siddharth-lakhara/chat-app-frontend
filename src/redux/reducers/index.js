import { combineReducers } from 'redux';
import socketOpen  from './socketsReducer';
import { usersListReducer} from './usersListReducer';

const rootReducer = combineReducers({
  sockets: socketOpen,
  users: usersListReducer,
})

export default rootReducer;