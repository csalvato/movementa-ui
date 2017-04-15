import React from 'react';
import PropTypes from 'prop-types';
import { AppBarHeader, SearchResultsPage, NotFoundPage } from 'components'
import { Route, Redirect, Switch } from 'react-router'

const propTypes = {
  match: PropTypes.object //Fed in from react-router - the path that matches this route
};

const defaultProps = {
};

function AppTemplate({match}) {
  return (
    <div className="app">
      <AppBarHeader/>
      <Switch>
        {/* Redirect root back to home page */}
        <Route exact path={'/search'} render={() => (<Redirect to="/"/>)}/>
        {/* Match use query as path */}
        <Route path={'/search/:query'} component={SearchResultsPage}/>
        <Route component={NotFoundPage}/>
      </Switch>
    </div>
  );
}

AppTemplate.propTypes = propTypes;
AppTemplate.defaultProps = defaultProps;

export default AppTemplate;
