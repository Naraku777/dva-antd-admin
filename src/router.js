import React from 'react';
import { Router, Route, IndexRoute } from 'dva/router';

// route components
import App from './routes/App'
import Dashboard from './routes/Dashboard'
import Statistic from './routes/Statistic'
import Construction from './routes/Construction'
import Task from './routes/Task'
import IDMapping from './routes/IDMapping'
import WindControl from './routes/WindControl'
import Login from "./routes/Login";
import Error from "./routes/Error";

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Dashboard} />
        <Route path="dashboard" component={Dashboard} />
        <Route path="statistic" component={Statistic} />
        <Route path="construction" component={Construction} />
        <Route path="task" component={Task} />
        <Route path="idmapping" component={IDMapping} />
        <Route path="windcontrol" component={WindControl} />
      </Route>
      <Route path="login" component={Login} />
      <Route path="*" component={Error} />
    </Router>
  )
}

export default RouterConfig;
