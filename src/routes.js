import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { HomePage,
         SearchResultsPage } from 'components';

// Must use the whole relative path specifically for
// importing templates due to Babel persnicketiness w/router
import AppTemplate from './components/templates/AppTemplate/AppTemplate'
import HomeTemplate from './components/templates/HomeTemplate/HomeTemplate'

const routes = (
  <Route>
    <Route path="/" component={HomeTemplate}>
      <IndexRoute component={HomePage} />
      {/* <Route path="*" component={NotFoundPage} /> */}
    </Route>
    <Route path="/search" component={AppTemplate}>
      <IndexRoute component={SearchResultsPage} />
    </Route>
  </Route>
)

export default routes;
