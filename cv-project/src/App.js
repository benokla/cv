import React, { Component } from 'react';
import { General } from './components/General';
import { Overview } from './components/Overview';

class App extends Component {
  constructor() {
    super()
    this.state = {
      general: {
        name: '',
        email: '',
        telephone: '',
      }
    }
  }

  handleChange = (e) => {
  }

  submit = (e) => {
      e.preventDefault();
  }

  render() {
    return (
      <div>
        <h1>CV APPLICATION</h1>
        <General handleChange={this.handleChange} submit={this.submit}></General>
        <Overview></Overview>
      </div>
    );
  }
}

export default App;