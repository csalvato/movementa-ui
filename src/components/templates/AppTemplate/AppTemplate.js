import React from 'react';
import PropTypes from 'prop-types';
import { AppBarHeader } from 'components'

const propTypes = {
  children: PropTypes.element
};

const defaultProps = {
};

function AppTemplate({children}) {
  return (
    <div className="app">
      <AppBarHeader/>
      {children}
    </div>
  );
}

AppTemplate.propTypes = propTypes;
AppTemplate.defaultProps = defaultProps;

export default AppTemplate;
