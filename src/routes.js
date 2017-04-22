import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import taskPage from './components/Task/taskPage';
import ManageTaskPage from './components/Task/ManageTaskPage';//eslint-disable-line import/no-named-as-default

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="about" component={AboutPage} />
    <Route path="task" component={ManageTaskPage} />
    <Route path="task/:id" component={ManageTaskPage} />
    <Route path="tasks" component={taskPage} />
  </Route>
);
