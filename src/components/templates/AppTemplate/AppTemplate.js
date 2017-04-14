import React from 'react';
import PropTypes from 'prop-types';
import { AppBarHeader, SearchResultsPage } from 'components'
import { Route, Redirect } from 'react-router'

const propTypes = {
  match: PropTypes.object //Fed in from react-router - the path that matches this route
};

const defaultProps = {
};

function AppTemplate({match}) {
  return (
    <div className="app">
      <AppBarHeader/>
      {/* Redirect root back to home page */}
      <Route exact path={`${match.url}`} render={() => (<Redirect to="/"/>)}/>
      {/* Match use query as path */}
      <Route path={`${match.url}/:query`} component={SearchResultsPage}/>
    </div>
  );
}

AppTemplate.propTypes = propTypes;
AppTemplate.defaultProps = defaultProps;

export default AppTemplate;
