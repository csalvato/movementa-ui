import React from 'react';
import Autocomplete from 'react-toolbox/lib/autocomplete/Autocomplete';
import Button from 'react-toolbox/lib/button/Button';

const source = {
  'ES-es': 'Spain',
  'TH-th': 'Thailand',
  'EN-gb': 'England',
  'EN-en': 'USA'
};

class SearchForm extends React.Component {
  state = {
      simple: ''
    }

    handleChange = (value) => {
      this.setState({simple: value});
    };

  render() {
    return (
      <div className="searchForm">
        <div className="row">
          <div className="col-xs-offset-1
                          col-xs-10">
            <div className="box">
              <Autocomplete
                 direction="down"
                 selectedPosition="above"
                 hint="Where do you want to train?"
                 multiple={false}
                 onChange={this.handleChange}
                 source={source}
                 value={this.state.simple}
               />
             </div>
          </div>
        </div>
        <div className="row center-xs">
          <div className="col-xs-12">
            <div className="box">
              <Button raised primary>FIND A GYM</Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchForm;
