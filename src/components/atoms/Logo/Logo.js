import React from 'react';
import logo from './logo.png';

class Logo extends React.Component {
  render() {
    return (
      <div className="logo box">
        <img src={logo} className="logo__image--large box" alt="logo" />
        <span className="logo__text--large">MOVEMENTA</span>
      </div>
    );
  }
}

export default Logo;
