import React from 'react';
import { AppBarHeader } from 'components'

class AppTemplate extends React.Component {
  render() {
    return (
      <div className="app">
        <AppBarHeader/>
        {this.props.children}
      </div>
    );
  }
}

export default AppTemplate;
