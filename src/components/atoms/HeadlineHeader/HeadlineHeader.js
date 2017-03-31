import React, { PropTypes } from 'react';

const propTypes = {
  children: PropTypes.string.isRequired
};

const defaultProps = {
  children: 'Adult Gymnastics',
};

class HeadlineHeader extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-xs-12 col-sm-8 col-sm-offset-2">
          <div className="box">
            <h1 className="headline-header__headline">
              {this.props.children}
            </h1>
          </div>
        </div>
      </div>
    );
  }
}

HeadlineHeader.propTypes = propTypes;
HeadlineHeader.defaultProps = defaultProps;

export default HeadlineHeader;
