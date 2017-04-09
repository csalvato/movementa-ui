import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.string.isRequired
};

const defaultProps = {
  children: 'Adult Gymnastics',
};

function HeadlineHeader({ children }) {
  return (
    <div className="row">
      <div className="col-xs-12 col-sm-8 col-sm-offset-2">
        <div className="box">
          <h1 className="headline-header__headline">
            {children}
          </h1>
        </div>
      </div>
    </div>
  );
}

HeadlineHeader.propTypes = propTypes;
HeadlineHeader.defaultProps = defaultProps;

export default HeadlineHeader;
