import React from 'react';
import Layout from 'react-toolbox/lib/layout/Layout';
import { AppBarHeader, DirectoryEntry } from 'components';

class SearchResultsPage extends React.Component {
  render() {
    return (
      <Layout>
        <AppBarHeader/>
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
