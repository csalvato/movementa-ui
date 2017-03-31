import React, { PropTypes } from 'react';
import { FeatureIcon } from 'components';
import Button from 'react-toolbox/lib/button/Button';
import FontIcon from 'react-toolbox/lib/font_icon/FontIcon';

const propTypes = {
  location: PropTypes.shape({
    name: PropTypes.string.isRequired,
    addressLine1: PropTypes.string.isRequired,
    addressLine2: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    zip: PropTypes.string.isRequired,
    phone: PropTypes.string,
    email: PropTypes.string,
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
    hasAdultOpenGym: PropTypes.bool.isRequired,
    hasAdultGymnasticsClasses: PropTypes.bool.isRequired
  }).isRequired

};

const defaultProps = {

};

class DirectoryEntry extends React.Component {
  render() {
    return (
      <div className="directory-entry">
        <div className="row bottom-xs">
          <div className="col-xs-6
                          directory-entry__location-contact-info">
            <h3 className="directory-entry__location-name">
              { this.props.location.name }
            </h3>
            <p className="directory-entry__location-line">
              { this.props.location.addressLine1 }
            </p>
            <p className="directory-entry__location-line">
              { this.props.location.addressLine2 }
            </p>
            <p className="directory-entry__location-line">
              { this.props.location.city }, { this.props.location.state } { this.props.location.zip }
            </p>
            <p className="directory-entry__location-line hidden-xs">
              <a href="#">
                <FontIcon value='phone' className="directory-entry__icon"/>
                { this.props.location.phone }
              </a>
            </p>
          </div>
          <div className="col-xs-6 directory-entry__location-other-info">
            <p className="directory-entry__other-line">
              <FeatureIcon hasFeature={ this.props.location.hasAdultOpenGym }>
                Adult Open Gym
              </FeatureIcon>
            </p>
            <p className="directory-entry__other-line">
              <FeatureIcon hasFeature={ this.props.location.hasAdultGymnasticsClasses } >
                Adult Classes
              </FeatureIcon>
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
          <div className="col-xs-6 end-xs col-sm start-md">
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

DirectoryEntry.propTypes = propTypes;
DirectoryEntry.defaultProps = defaultProps;

export default DirectoryEntry;
