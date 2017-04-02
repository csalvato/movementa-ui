import React from 'react';
import Layout from 'react-toolbox/lib/layout/Layout';
import { DirectoryEntry, HeadlineHeader } from 'components';

function SearchResultsPage({ }) {
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
            <DirectoryEntry
              location={ { name: "NY Strong",
                           addressLine1: "300 Phillips Park Rd.",
                           addressLine2: "Suite 205",
                           city: "Mamaroneck",
                           state: "NY",
                           zip: "10543",
                           phone: "7182523974",
                           email: "csalvato@gmail.com",
                           lat: -78.2490104891,
                           lng: -73.2490104891,
                           hasAdultOpenGym: true,
                           hasAdultGymnasticsClasses: false
                         } }/>
           <DirectoryEntry
             location={ { name: "NY Strong",
                          addressLine1: "300 Phillips Park Rd.",
                          addressLine2: "Suite 205",
                          city: "Mamaroneck",
                          state: "NY",
                          zip: "10543",
                          phone: "7182523974",
                          email: "csalvato@gmail.com",
                          lat: -78.2490104891,
                          lng: -73.2490104891,
                          hasAdultOpenGym: true,
                          hasAdultGymnasticsClasses: false
                        } }/>
            <DirectoryEntry
              location={ { name: "NY Strong",
                           addressLine1: "300 Phillips Park Rd.",
                           addressLine2: "Suite 205",
                           city: "Mamaroneck",
                           state: "NY",
                           zip: "10543",
                           phone: "7182523974",
                           email: "csalvato@gmail.com",
                           lat: -78.2490104891,
                           lng: -73.2490104891,
                           hasAdultOpenGym: true,
                           hasAdultGymnasticsClasses: false
                         } }/>
           <DirectoryEntry
             location={ { name: "NY Strong",
                          addressLine1: "300 Phillips Park Rd.",
                          addressLine2: "Suite 205",
                          city: "Mamaroneck",
                          state: "NY",
                          zip: "10543",
                          phone: "7182523974",
                          email: "csalvato@gmail.com",
                          lat: -78.2490104891,
                          lng: -73.2490104891,
                          hasAdultOpenGym: true,
                          hasAdultGymnasticsClasses: false
                        } }/>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default SearchResultsPage;
