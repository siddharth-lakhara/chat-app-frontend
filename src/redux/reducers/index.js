import { combineReducers } from 'redux';
import socketOpen  from './socketsReducer';

const rootReducer = combineReducers({
  socketOpen
})

export default rootReducer;