import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';

import { BrowserRouter } from 'react-router-dom';
import { AppContainer } from './containers/AppContainer';

import reducer from '../reducer';
import rootSaga from '../sagas/video';
import * as serviceWorker from '../serviceWorker';

import 'semantic-ui-css/semantic.min.css';

const sagaMiddleWare = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleWare));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <AppContainer / >
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
sagaMiddleWare.run(rootSaga);
