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

function DirectoryEntry({ location }) {
  const full_address = [location.addressLine1,
                        location.addressLine2,
                        location.city,
                        location.state,
                        location.zip].join(" ").replace(/ /g, "+");
  const googleMapsUrl = `http://maps.google.com/?q=${full_address}`
  const phoneString = location.phone.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
  const phoneUrl = `tel:${location.phone}`

  return (
    <div className="directory-entry">
      <div className="row bottom-xs">
        <div className="col-xs-6
                        directory-entry__location-contact-info">
          <h3 className="directory-entry__location-name">
            { location.name }
          </h3>
          <p className="directory-entry__location-line">
            { location.addressLine1 }
          </p>
          <p className="directory-entry__location-line">
            { location.addressLine2 }
          </p>
          <p className="directory-entry__location-line">
            { location.city }, { location.state } { location.zip }
          </p>
          <p className="directory-entry__location-line hidden-xs">
            <a href={phoneUrl}>
              <FontIcon value='phone' className="directory-entry__icon"/>
              { phoneString }
            </a>
          </p>
        </div>
        <div className="col-xs-6 directory-entry__location-other-info">
          <p className="directory-entry__other-line">
            <FeatureIcon hasFeature={ location.hasAdultOpenGym }>
              Adult Open Gym
            </FeatureIcon>
          </p>
          <p className="directory-entry__other-line">
            <FeatureIcon hasFeature={ location.hasAdultGymnasticsClasses } >
              Adult Classes
            </FeatureIcon>
          </p>
          <p className="directory-entry__other-line hidden-xs">
            <a href={ googleMapsUrl } target='_blank'>
              <FontIcon value='near_me' className="directory-entry__icon"/>
              See on Google Maps
            </a>
          </p>
        </div>
      </div>
      <div className="row directory-entry__cta-buttons visible-xs">
        <div className="col-xs-6 end-xs col-sm start-md">
          <div className="box">
            <Button
              raised
              primary
              icon='phone'
              href={phoneUrl}
            >
              Call
            </Button>
          </div>
        </div>
        <div className="col-xs-6 start-xs">
          <div className="box">
            <Button
              raised
              icon='near_me'
              href={ googleMapsUrl }
              target='_blank'
            >
              Map
            </Button>
          </div>
        </div>
      </div>
      <hr/>
    </div>
  );
}

DirectoryEntry.propTypes = propTypes;
DirectoryEntry.defaultProps = defaultProps;

export default DirectoryEntry;
