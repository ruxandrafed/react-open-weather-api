import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Main from '../containers/Main';
import HomeContainer from '../containers/HomeContainer';
import ForecastContainer from '../containers/ForecastContainer';
import DayDetailContainer from '../containers/DayDetailContainer';

const routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={HomeContainer} />
      <Route path='forecast/:city' component={ForecastContainer} />
      <Route path='detail/:city' component={DayDetailContainer} />
    </Route>
  </Router>
);

export default routes;