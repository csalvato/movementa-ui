import React, { PropTypes } from 'react';
import FontIcon from 'react-toolbox/lib/font_icon/FontIcon';

const propTypes = {
  hasFeature: PropTypes.bool.isRequired,
  children: PropTypes.string.isRequired
};

const defaultProps = {
  hasFeature: false
};

class FeatureIcon extends React.Component {
   getIconName() {
     return this.props.hasFeature ? "check_circle" : "cancel";
  }

  getIconState() {
    return this.props.hasFeature ? "pass" : "fail";
  }

  render() {
    return (
      <div>
        <FontIcon
          value={ this.getIconName() }
          className={ "feature-icon feature-icon--" + this.getIconState() }
        />
        { this.props.children }
      </div>
    )
  }
}

FeatureIcon.propTypes = propTypes;
FeatureIcon.defaultProps = defaultProps;

export default FeatureIcon;
