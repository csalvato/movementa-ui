import React from 'react';
import PropTypes from 'prop-types';
import FontIcon from 'react-toolbox/lib/font_icon/FontIcon';

const propTypes = {
  hasFeature: PropTypes.bool.isRequired,
  children: PropTypes.string.isRequired
};

const defaultProps = {
  hasFeature: false
};

function FeatureIcon({ hasFeature, children }) {
  const getIconName = () => {
     return hasFeature ? "check_circle" : "cancel";
  }

  const getIconState = () => {
    return hasFeature ? "pass" : "fail";
  }

  return (
    <div>
      <FontIcon
        value={ getIconName() }
        className={ "feature-icon feature-icon--" + getIconState() }
      />
      { children }
    </div>
  )
}

FeatureIcon.propTypes = propTypes;
FeatureIcon.defaultProps = defaultProps;

export default FeatureIcon;
