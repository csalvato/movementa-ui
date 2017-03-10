import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import App from './components/App';
import { HomePage } from './components';

function Routes(props) {
  return(
    <Router {...props}>
      <Route path="/" component={App}>
        <IndexRoute component={HomePage} />
      </Route>
    </Router>
  )
}

export default Routes;
