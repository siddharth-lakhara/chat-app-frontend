import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleWare from 'redux-saga';
import App from './App';
import rootReducer from './redux/reducers';
import setupSockets from './setupSockets';
import sendMsgSaga from "./sagas/sendMsgSaga";
import './index.css';

const render = () => {
  const sagaMiddleWare = createSagaMiddleWare();
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(sagaMiddleWare)),
  );
  
  const socket = setupSockets(store.dispatch);
  sagaMiddleWare.run(sendMsgSaga, {
    socket,
    dispatch: store.dispatch,
    getState: store.getState,
  });

  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>, document.getElementById('root'));
};

export default render;
