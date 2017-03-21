import React from 'react';
import AppBar from 'react-toolbox/lib/app_bar/AppBar';
import { Logo, SearchForm } from 'components'

class AppBarHeader extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-xs-12">
          <div className="box appbar-header">
            <AppBar>
              <div className="col-xs-1 visible-xs">
                <Logo/>
              </div>
              <div className="col-sm-2 hidden-xs">
                <Logo withText/>
              </div>
              <div className="col-xs-10 col-sm-9">
                <SearchForm horizontal/>
              </div>
            </AppBar>
          </div>
        </div>
      </div>
    );
  }
}

export default AppBarHeader;
