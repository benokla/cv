import React, { Component } from 'react';
import { General } from './components/General';
import { Overview } from './components/Overview';
import { Education } from './components/Education';
import { Practical } from './components/Practical';
import './styles/main.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
        name: '',
        email: '',
        telephone: '',
        schoolname: '',
        titleofstudy: '',
        dateofstudy: '',
        companyname: '',
        positiontitle: '',
        dateofwork: '',
        display: {
          name: '',
          email: '',
          telephone: '',
          schoolname: '',
          titleofstudy: '',
          dateofstudy: '',
          companyname: '',
          positiontitle: '',
          dateofwork: '',
        }
      }
    }
  

  handleChange = (e) => {
    this.setState({
        [e.target.name] : e.target.value,
    })
  }

  submitGeneral = (e) => {
    e.preventDefault();
    this.setState({
      display:{
        name: this.state.name,
        email: this.state.email,
        telephone: this.state.telephone,
        schoolname: this.state.display.schoolname,
        titleofstudy: this.state.display.titleofstudy,
        dateofstudy: this.state.display.dateofstudy,
        companyname: this.state.display.companyname,
        positiontitle: this.state.display.positiontitle,
        dateofwork: this.state.display.dateofwork,
      }
    })
    this.setState({
      name: '',
      email: '',
      telephone: '',
    })
  }
  submitEducation = (e) => {
    e.preventDefault();
    this.setState({
      display: {
        name: this.state.display.name,
        email: this.state.display.email,
        telephone: this.state.display.telephone,
        schoolname: this.state.schoolname,
        titleofstudy: this.state.titleofstudy,
        dateofstudy: this.state.dateofstudy,
        companyname: this.state.display.companyname,
        positiontitle: this.state.display.positiontitle,
        dateofwork: this.state.display.dateofwork,
      }
    })
    this.setState({
      schoolname: '',
      titleofstudy: '',
      dateofstudy: '',
    })
  }
  submitPractical = (e) => {
    e.preventDefault();
    this.setState({
      display: {
        name: this.state.display.name,
        email: this.state.display.email,
        telephone: this.state.display.telephone,
        schoolname: this.state.display.schoolname,
        titleofstudy: this.state.display.titleofstudy,
        dateofstudy: this.state.display.dateofstudy,
        companyname: this.state.companyname,
        positiontitle: this.state.positiontitle,
        dateofwork: this.state.dateofwork,
      }
    })
    console.log(this.state)
    this.setState({
      companyname: '',
      positiontitle: '',
      dateofwork: '',
    })
  }
  editGeneral = (e) => {
    e.preventDefault();
    this.setState({
      name: this.state.display.name,
      email: this.state.display.email,
      telephone: this.state.display.telephone,
    })
  }
  editEducation = (e) => {
    e.preventDefault();
    this.setState({
      schoolname: this.state.display.schoolname,
      titleofstudy: this.state.display.titleofstudy,
      dateofstudy: this.state.display.dateofstudy,
    })
  }
  editPractical = (e) => {
    e.preventDefault();
    this.setState({
      companyname: this.state.display.companyname,
      positiontitle: this.state.display.positiontitle,
      dateofwork: this.state.display.dateofwork,
    })
  }

  render() {
    return (
      <div class="wrapper">
        <h1 id="title">CV APPLICATION</h1>
        <div className="inputContainer">
          <General handleChange={this.handleChange} submit={this.submitGeneral} name={this.state.name} email={this.state.email} telephone={this.state.telephone} edit={this.editGeneral}></General>
          <Education handleChange={this.handleChange} submit={this.submitEducation} schoolname={this.state.schoolname} titleofstudy={this.state.titleofstudy} dateofstudy={this.state.dateofstudy} edit={this.editEducation}></Education>
          <Practical handleChange={this.handleChange} submit={this.submitPractical} companyname={this.state.companyname} positiontitle={this.state.positiontitle} dateofwork={this.state.dateofwork} edit={this.editPractical}></Practical>
        </div>
        <Overview name={this.state.display.name} email={this.state.display.email} telephone={this.state.display.telephone} schoolname={this.state.display.schoolname} titleofstudy={this.state.display.titleofstudy} dateofstudy={this.state.display.dateofstudy} companyname={this.state.display.companyname} positiontitle={this.state.display.positiontitle} dateofwork={this.state.display.dateofwork} >  </Overview>
        
      </div>
    );
  }
}

export default App;