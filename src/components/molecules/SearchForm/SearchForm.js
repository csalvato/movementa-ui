import React, { PropTypes }from 'react';
import Autocomplete from 'react-toolbox/lib/autocomplete/Autocomplete';
import IconButton from 'react-toolbox/lib/button/IconButton';
import Button from 'react-toolbox/lib/button/Button';
import { connect } from 'react-redux'
import { updateSearchQuery,
         updateAutocompleteItems,
         fetchSearchResults } from 'actions'

const propTypes = {
  query: PropTypes.string.isRequired,
  autocompleteItems: PropTypes.array.isRequired,
  // Requires dispatch since this is a stateful component
  //  and will never not have state or dispatch.
  dispatch: PropTypes.func.isRequired
};

const defaultProps = {
  query: '',
  autocompleteItems: []
};

export class SearchForm extends React.Component {
  constructor(props) {
    super(props)
    this.autocompleteCallback = this.autocompleteCallback.bind(this)
    this.handleQueryChange = this.handleQueryChange.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
     this.autocompleteService = new window.google.maps.places.AutocompleteService()
  }

  handleChange(value) {
    this.props.dispatch(updateSearchQuery(value));
  }

  autocompleteCallback(predictions, status) {
    const okStatus = window.google.maps.places.PlacesServiceStatus.OK
    if (status !== okStatus) {
      this.props.dispatch(updateAutocompleteItems([]))
      return
    }

    let predictionsArray = predictions.map((p, idx) => (p.description))
    this.props.dispatch(updateAutocompleteItems(predictionsArray))
  }

  handleQueryChange(query) {
    this.props.dispatch(updateSearchQuery(query));
    //Tells Google to only return geocoding results,
    // not business names
    const autoCompleteOptions = { types: ['geocode'] }
    this.autocompleteService.getPlacePredictions({ ...autoCompleteOptions , input: query }, this.autocompleteCallback)
  }

  renderVertical() {
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
               source={this.props.autocompleteItems}
               value={this.props.query}
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

  renderHorizontal() {
    return (
      <div className="searchForm box">
        <div className="row end-xs">
          <div className="col-xs-9">
            <div className="box">
              <Autocomplete
                 className="horizontal-search-form-autocomplete"
                 direction="down"
                 selectedPosition="above"
                 hint="Search gyms near you"
                 multiple={false}
                 onQueryChange={this.handleQueryChange}
                 onChange={this.handleChange}
                 source={this.props.autocompleteItems}
                 value={this.props.query}
                 suggestionMatch={"anywhere"}
               />
             </div>
          </div>
          <div className="col-xs-1">
            <div className="box horizontal-search-form__submit-button">
              <IconButton
                inverse
                icon="search"
                onClick={() => {this.props.dispatch(fetchSearchResults(this.props.query))}}
                // href={`/search?q=${encodeURIComponent(this.props.query)}`}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }

  render() {
    var renderedForm;
    if(this.props.horizontal === true) {
      renderedForm = this.renderHorizontal();
    } else {
      renderedForm = this.renderVertical();
    }
    return renderedForm;
  }
}

const mapStateToProps = (state) => {
  return {
    query: state.query,
    autocompleteItems: state.autocompleteItems
  }
}

SearchForm.propTypes = propTypes;
SearchForm.defaultProps = defaultProps;

export default connect(mapStateToProps)(SearchForm);
