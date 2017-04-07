import React, { PropTypes } from 'react';
import Layout from 'react-toolbox/lib/layout/Layout';
import ProgressBar from 'react-toolbox/lib/progress_bar/ProgressBar';
import { connect } from 'react-redux'
import { DirectoryEntry, HeadlineHeader } from 'components';

const propTypes = {
  results: PropTypes.arrayOf(DirectoryEntry).isRequired,
  isFetchingSearchResults: PropTypes.bool.isRequired,
  // Requires dispatch since this is a stateful component
  //  and will never not have state or dispatch.
  dispatch: PropTypes.func.isRequired
};

const defaultProps = {
  results: [],
  isFetchingSearchResults: false
};

class SearchResultsPage extends React.Component {
  renderSearchResults(){
    if(this.props.isFetchingSearchResults) {
      return <div className="search-results-page__spinner">
              <ProgressBar type='circular' mode='indeterminate' />
             </div>
    } else {
       return this.props.results
    }
  }

  render() {
    return (
      <div className="search-results-page">
        <div className="row">
          <div className="col-xs-12 headline-header">
            <div className="box">
              <HeadlineHeader/>
            </div>
          </div>
        </div>
        <Layout className="search-results-page__results">
          <div className="row">
            <div className="col-xs-12 col-sm-8 col-sm-offset-2 search-results-page__entries">
              <div className="box">
                {this.renderSearchResults()}
              </div>
            </div>
          </div>
        </Layout>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isFetchingSearchResults: state.searchResults.isFetching,
    results: state.searchResults.results
  }
}

SearchResultsPage.propTypes = propTypes
SearchResultsPage.defaultProps = defaultProps

SearchResultsPage = connect(mapStateToProps)(SearchResultsPage)

export default SearchResultsPage;
