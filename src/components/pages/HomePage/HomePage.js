import React from 'react';
import Layout from 'react-toolbox/lib/layout/Layout';
import { Logo } from 'components';

class HomePage extends React.Component {
  render() {
    return (
      <Layout>
        <div className="row">
          <div className="col-xs-offset-1
                          col-xs-10">
            <header className="box">
              <Logo />
            </header>
              <section className="box">
                  <h1>Learn Gymnastics</h1>
                  <h2>Find a gym that allows adults to train.</h2>
              </section>
          </div>
        </div>
      </Layout>
    );
  }
}

export default HomePage;
