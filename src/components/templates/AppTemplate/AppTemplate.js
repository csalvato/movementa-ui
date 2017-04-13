import React from 'react';
import PropTypes from 'prop-types';
import { AppBarHeader, SearchResultsPage } from 'components'
import { Route } from 'react-router'

const propTypes = {
  match: PropTypes.object
};

const defaultProps = {
};

function AppTemplate({match}) {
  return (
    <div className="app">
      <AppBarHeader/>
      <Route path={`${match.url}`} component={SearchResultsPage}/>
    </div>
  );
}

AppTemplate.propTypes = propTypes;
AppTemplate.defaultProps = defaultProps;

export default AppTemplate;
