import { combineReducers } from 'redux';
import socketOpen  from './socketsReducer';
import { usersReducer} from './usersReducer';

const rootReducer = combineReducers({
  sockets: socketOpen,
  users: usersReducer,
})

export default rootReducer;