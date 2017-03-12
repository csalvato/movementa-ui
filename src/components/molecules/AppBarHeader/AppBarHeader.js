import React from 'react';
import AppBar from 'react-toolbox/lib/app_bar/AppBar';
import { Logo, SearchForm } from 'components'

class AppBarHeader extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-xs-12">
          <div className="box">
            <AppBar>
              <Logo/>
              <SearchForm/>
            </AppBar>
          </div>
        </div>
      </div>
    );
  }
}

export default AppBarHeader;
