import React from 'react';
import Autocomplete from 'react-toolbox/lib/autocomplete/Autocomplete';
import Button from 'react-toolbox/lib/button/Button';

class SearchForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = { value: '',
                   autocompleteItems: [] }
    this.autocompleteCallback = this.autocompleteCallback.bind(this)
    this.handleQueryChange = this.handleQueryChange.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(value) {
    this.setState({value: value});
  }

  componentDidMount() {
    this.autocompleteService = new window.google.maps.places.AutocompleteService()
    this.autocompleteOK = window.google.maps.places.PlacesServiceStatus.OK
  }

  autocompleteCallback(predictions, status) {
    if (status !== this.autocompleteOK) {
      console.log("Error with autocomplete predictions");
      if (this.props.clearItemsOnError) { this.clearAutocomplete() }
      return
    }

    this.setState({
      autocompleteItems: predictions.map((p, idx) => (p.description))
    })
  }

  handleQueryChange(query) {
    console.log("The query:", query);
    this.setState({value: query})
    console.log("The value:", this.state.value);
    this.autocompleteService.getPlacePredictions({ ...this.props.options, input: query },
                                                 this.autocompleteCallback)
    console.log("The value:", this.state.value);
  }

  clearAutocomplete() {
    this.setState({ autocompleteItems: [] })
  }

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
                 onQueryChange={this.handleQueryChange}
                 onChange={this.handleChange}
                 source={this.state.autocompleteItems}
                 value={this.state.value}
                 suggestionMatch={"anywhere"}
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
