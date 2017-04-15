import React from 'react';
import Layout from 'react-toolbox/lib/layout/Layout';
import { Logo, SearchForm } from 'components';
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import { updatePageTitle } from 'actions'

export function HomePage({dispatch}) {
  const pageTitle = `Movementa Adult Gymnastics Directory`
  dispatch(updatePageTitle(pageTitle))
  return (
    <div className="homepage">
      <Helmet>
          <meta charSet="utf-8" />
          <title>{pageTitle}</title>
          <meta name="description" content="Find gyms that will allow adults to train gymnastics, tricking, tumbling or parkour." />
      </Helmet>
      <div className="blurred-background">
        <div className="blurred-background__image"></div>
      </div>
      <Layout>
        <div className="logo-header row center-xs">
          <div className="col-xs-12">
            <header className="box">
              <Logo withText/>
            </header>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-offset-1
                          col-xs-10">
            <section className="box homepage__form-container">
              <div className="row">
                <div className="col-xs">
                  <div className="box">
                    <h1 className="homepage__headline">Train Flips</h1>
                    <h2 className="homepage__subheadline">Find a gym that allows adults to train.</h2>
                  </div>
                </div>
              </div>
              <SearchForm/>
            </section>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default connect()(HomePage);
