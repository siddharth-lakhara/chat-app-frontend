import { combineReducers } from 'redux';
import socketOpen from './socketOpenReducer';

const rootReducer = combineReducers({
  socketOpen
})

export default rootReducer;