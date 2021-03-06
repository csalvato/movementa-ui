import React from 'react';
import PropTypes from 'prop-types'
import Autocomplete from 'react-toolbox/lib/autocomplete/Autocomplete';
import IconButton from 'react-toolbox/lib/button/IconButton';
import Button from 'react-toolbox/lib/button/Button';
import { connect } from 'react-redux'
import { fetchSearchResults,
         fetchQueryPredictions } from 'actions'
import { push } from 'react-router-redux'

const propTypes = {
  query: PropTypes.string.isRequired,
  autocompleteItems: PropTypes.array.isRequired,
  horizontal: PropTypes.bool.isRequired,
  // Dispatch passed as a prop by redux  since this is a stateful component.
  dispatch: PropTypes.func
};

const defaultProps = {
  query: '',
  autocompleteItems: [],
  horizontal: false
};

export class SearchForm extends React.Component {
  constructor(props) {
    super(props)
    this.handleQueryChange = this.handleQueryChange.bind(this)
    this.performSearch = this.performSearch.bind(this)
  }

  performSearch(value){
    var query;
    if( typeof value === "string" && value.trim() !== ''){
      query = value
    } else {
      query = this.props.query
    }

    if( this.props.query.trim() !== '' ){
      this.props.dispatch(push(`/search/${query}`));
      this.props.dispatch(fetchSearchResults(query))
    }
  }

  handleQueryChange(query) {
    this.props.dispatch(fetchQueryPredictions(query));
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
               onChange={this.performSearch}
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
            <Button
              raised
              primary
              onClick={this.performSearch}
            >
              FIND A GYM
            </Button>
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
                 onChange={this.performSearch}
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
                onClick={this.performSearch}
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
