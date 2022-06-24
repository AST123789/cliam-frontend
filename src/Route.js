// LIBRARY
/*eslint-disable no-unused-vars*/
import React from 'react';
/*eslint-enable no-unused-vars*/
import {Route, IndexRoute} from 'react-router';

// COMPONENT
import Application from './Components/App/App';
import Login from './Components/Login.js';

export default (
    <Route component={Application} path='/'>
      <Route component={Login} path='login' />
    </Route>
);