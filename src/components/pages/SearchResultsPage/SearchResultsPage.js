import React from 'react';
import Layout from 'react-toolbox/lib/layout/Layout';
import { DirectoryEntry, HeadlineHeader } from 'components';

class SearchResultsPage extends React.Component {
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
                <DirectoryEntry/>
                <DirectoryEntry/>
                <DirectoryEntry/>
                <DirectoryEntry/>
                <DirectoryEntry/>
                <DirectoryEntry/>
              </div>
            </div>
          </div>
        </Layout>
      </div>
    );
  }
}

export default SearchResultsPage;
