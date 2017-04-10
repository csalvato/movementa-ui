import React from 'react';
import PropTypes from 'prop-types';
import logo from './logo.png';

const propTypes = {
  withText: PropTypes.bool
};

const defaultProps = {
  withText: false
};

function Logo({ withText }) {
  const logoText = withText ? <span className="logo__text--large">MOVEMENTA</span> : null;

  return (
    <div className="logo box">
      <img
        src={logo}
        className="logo__image--large box"
        alt="logo"
        role="presentation" />
      {logoText}
    </div>
  );
}

Logo.propTypes = propTypes;
Logo.defaultProps = defaultProps;

export default Logo;
