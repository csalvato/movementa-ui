import React, { Component } from 'react';
import logo from './logo.png';
import Button from 'react-toolbox/lib/button/Button';
import Input from 'react-toolbox/lib/input/Input';
import Layout from 'react-toolbox/lib/layout/Layout';

class App extends Component {
  state = { name: '', hint: '' };

  handleChange = (name, value) => {
    this.setState({...this.state, [name]: value});
  };

  render() {
    return (
      <div className="App">
        <Layout>
          <img src={logo} className="movementa-logo" alt="logo" />
          <span>MOVEMENTA</span>
          <h1>Learn Gymnastics</h1>
          <h2>Find a gym that allows adults to train.</h2>
          <Input type='text'
                 hint='Where do you want to train?'
                 name='name'
                 value={this.state.label}
                 onChange={this.handleChange.bind(this, 'label')}
                 maxLength={16} />
          <Button raised primary>FIND A GYM</Button>
        </Layout>
      </div>
    );
  }
}

export default App;
