import React from 'react';
import Button from 'react-toolbox/lib/button/Button';
import FontIcon from 'react-toolbox/lib/font_icon/FontIcon';

class DirectoryEntry extends React.Component {
  render() {
    return (
      <div className="directory-entry">
        <div className="row bottom-xs">
          <div className="col-xs-6
                          directory-entry__location-contact-info">
            <h3 className="directory-entry__location-name">
              NY Strong
            </h3>
            <p className="directory-entry__location-line">
              300 Phillips Park Rd.
            </p>
            <p className="directory-entry__location-line">
              2nd Floor
            </p>
            <p className="directory-entry__location-line">
              Mamaroneck, NY 10543
            </p>
            <p className="directory-entry__location-line hidden-xs">
              <a href="#">
                <FontIcon value='phone' className="directory-entry__icon"/>
                (718)-252-3974
              </a>
            </p>
          </div>
          <div className="col-xs-6 directory-entry__location-other-info">
            <p className="directory-entry__other-line">
              <FontIcon value='check_circle' className="directory-entry__icon directory-entry__icon--pass"/>
              Adult Open Gym
            </p>
            <p className="directory-entry__other-line">
              <FontIcon value='cancel' className="directory-entry__icon directory-entry__icon--fail"/>
              Adult Classes
            </p>
            <p className="directory-entry__other-line hidden-xs">
              <a href="#">
                <FontIcon value='near_me' className="directory-entry__icon"/>
                See on Google Maps
              </a>
            </p>
          </div>
        </div>
        <div className="row directory-entry__cta-buttons visible-xs">
          <div className="col-xs-6 end-xs col-sm start-sm">
            <div className="box">
              <Button icon='phone' raised primary>Call</Button>
            </div>
          </div>
          <div className="col-xs-6 start-xs">
            <div className="box">
              <Button icon='near_me' raised>Map</Button>
            </div>
          </div>
        </div>
        <hr/>
      </div>
    );
  }
}

export default DirectoryEntry;
