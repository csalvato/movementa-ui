import React from 'react';
import logo from './logo.png';

class Logo extends React.Component {
  render() {
    return (
      <div className="logo">
        <img src={logo} className="movementa-logo" alt="logo" />
        <span>MOVEMENTA</span>
      </div>
    );
  }
}

export default Logo;
