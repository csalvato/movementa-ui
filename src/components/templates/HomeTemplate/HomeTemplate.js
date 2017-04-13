import React from 'react';
import PropTypes from 'prop-types'
import { HomePage } from 'components'
import { Route } from 'react-router'

const propTypes = {
  match: PropTypes.object
};

const defaultProps = {
};

function HomeTemplate({match}) {
  return (
    <div className="home">
      <Route path={`${match.url}`} component={HomePage}/>
    </div>
  );
}

HomeTemplate.propTypes = propTypes;
HomeTemplate.defaultProps = defaultProps;

export default HomeTemplate;
