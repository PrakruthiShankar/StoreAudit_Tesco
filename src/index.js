/*eslint-disable import/default */
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import {loadTasks} from './actions/taskActions';
import {loadAnswers} from './actions/answerActions';
import './styles/styles.css'; //Webpack can import CSS files too!
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const store = configureStore();
store.dispatch(loadTasks());
store.dispatch(loadAnswers());

render(
	<Provider store={store}>
    <Router history={browserHistory} routes={routes} />
    </Provider>,
  document.getElementById('app')
);
