import React from 'react';

class HomeTemplate extends React.Component {
  render() {
    return (
      <div className="home">
        {this.props.children}
      </div>
    );
  }
}

export default HomeTemplate;
