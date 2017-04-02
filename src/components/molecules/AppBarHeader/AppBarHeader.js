import React from 'react';
import AppBar from 'react-toolbox/lib/app_bar/AppBar';
import { Logo, SearchForm } from 'components'

function AppBarHeader({ }) {
  return (
    <div className="appbar-header">
      <div className="row">
        <div className="col-xs-12">
          <div className="box">
            <AppBar className="appbar">
              <div className="col-xs-1 visible-xs">
                <Logo/>
              </div>
              <div className="col-sm-3 hidden-xs">
                <Logo withText/>
              </div>
              <div className="col-xs-11 col-sm-9">
                <SearchForm horizontal/>
              </div>
            </AppBar>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppBarHeader;
