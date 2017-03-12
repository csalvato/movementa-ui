import React from 'react';
import AppBar from 'react-toolbox/lib/app_bar/AppBar';
import { Logo, SearchForm } from 'components'

class AppBarHeader extends React.Component {
  render() {
    return (
      <AppBar>
        <Logo/>
        <SearchForm/>
      </AppBar>
    );
  }
}

export default AppBarHeader;
