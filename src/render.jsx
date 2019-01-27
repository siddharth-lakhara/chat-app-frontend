import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleWare from 'redux-saga';
import App from './App';
import rootReducer from './redux/reducers';
import setupSockets from './setupSockets';
import './index.css';

const render = () => {
  const sagaMiddleWare = createSagaMiddleWare();
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(sagaMiddleWare)),
  );
  setupSockets(store.dispatch);
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>, document.getElementById('root'));
};

export default render;
