import React, { PropTypes } from 'react';
import logo from './logo.png';

const propTypes = {
  withText: PropTypes.boolean
};

const defaultProps = {
  withText: false
};

class Logo extends React.Component {
  renderText() {
    return (<span className="logo__text--large">MOVEMENTA</span>);
  }

  render() {
    const logoText = this.props.withText ? this.renderText() : null;
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
}

Logo.propTypes = propTypes;
Logo.defaultProps = defaultProps;

export default Logo;
