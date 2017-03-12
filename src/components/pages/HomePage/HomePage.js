import React from 'react';
import logo from './logo.png';
import Button from 'react-toolbox/lib/button/Button';
import Autocomplete from 'react-toolbox/lib/autocomplete/Autocomplete';
import Layout from 'react-toolbox/lib/layout/Layout';

const source = {
  'ES-es': 'Spain',
  'TH-th': 'Thailand',
  'EN-gb': 'England',
  'EN-en': 'USA'
};

class HomePage extends React.Component {
  state = {
      simple: ''
    }

    handleChange = (value) => {
      this.setState({simple: value});
    };

  render() {
    return (
      <Layout>
        <div className="row">
          <div className="col-xs-offset-1
                          col-xs-10">
            <header className="box">
              <img src={logo} className="movementa-logo" alt="logo" />
              <span>MOVEMENTA</span>
            </header>
              <section className="box">
                  <h1>Learn Gymnastics</h1>
                  <h2>Find a gym that allows adults to train.</h2>
                  <Autocomplete
                     direction="down"
                     selectedPosition="above"
                     hint="Where do you want to train?"
                     multiple={false}
                     onChange={this.handleChange}
                     source={source}
                     value={this.state.simple}
                   />
              </section>
          </div>
        </div>
        <div className="row center-xs">
          <div className="col-xs-12">
            <Button raised primary>FIND A GYM</Button>
          </div>
        </div>
      </Layout>
    );
  }
}

export default HomePage;
