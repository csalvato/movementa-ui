import React from 'react';
import Layout from 'react-toolbox/lib/layout/Layout';
import { DirectoryEntry, HeadlineHeader } from 'components';

class SearchResultsPage extends React.Component {
  render() {
    return (
      <Layout className="search-results-page">
        <HeadlineHeader/>
        <DirectoryEntry/>
        <DirectoryEntry/>
        <DirectoryEntry/>
        <DirectoryEntry/>
        <DirectoryEntry/>
        <DirectoryEntry/>
      </Layout>
    );
  }
}

export default SearchResultsPage;
