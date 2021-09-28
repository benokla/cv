import React, { Component } from 'react';
import { General } from './components/General';
import { Overview } from './components/Overview';

class App extends Component {
  constructor() {
    super()
    this.state = {
        name: '',
        email: '',
        telephone: '',
        display: {
          name: '',
          email: '',
          telephone: '',
        }
      }
    }
  

  handleChange = (e) => {
    this.setState({
        [e.target.name] : e.target.value,
    })
  }

  submit = (e) => {
      e.preventDefault();
      this.setState({
        display:{
          name: this.state.name,
          email: this.state.email,
          telephone: this.state.telephone,
        }
      })
      this.setState({
        name: '',
        email: '',
        telephone: '',
      })
  }

  edit = (e) => {
    e.preventDefault();
    this.setState({
      name: this.state.display.name,
      email: this.state.display.email,
      telephone: this.state.display.telephone,
    })
  }

  render() {
    return (
      <div>
        <h1>CV APPLICATION</h1>
        <General handleChange={this.handleChange} submit={this.submit} name={this.state.name} email={this.state.email} telephone={this.state.telephone} edit={this.edit}></General>
        <Overview name={this.state.display.name} email={this.state.display.email} telephone={this.state.display.telephone}>  </Overview>
      </div>
    );
  }
}

export default App;