import React from 'react';
import Button from 'react-toolbox/lib/button/Button';

class DirectoryEntry extends React.Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-6">
            <p>NY Strong</p>
            <p>300 Phillips Park Rd.</p>
            <p>2nd Floor</p>
            <p>Mamaroneck, NY 10543</p>
          </div>
          <div className="col-xs-6">
            <p>Adult Open Gym</p>
            <p>Adult Classes</p>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-6">
            <Button raised primary>Call</Button>
          </div>
          <div className="col-xs-6">
            <Button raised>Map</Button>
          </div>
        </div>
        <hr/>
      </div>
    );
  }
}

export default DirectoryEntry;
