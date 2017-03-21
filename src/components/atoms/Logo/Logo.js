import React from 'react';
import logo from './logo.png';

class Logo extends React.Component {
  renderText() {
    return (<span className="logo__text--large">MOVEMENTA</span>);
  }

  render() {
    const logoText = this.props.withText ? this.renderText() : null;
    return (
      <div className="logo box">
        <img src={logo} className="logo__image--large box" alt="logo" />
        {logoText}
      </div>
    );
  }
}

export default Logo;
