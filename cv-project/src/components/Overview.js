import React, { Component } from "react";

class Overview extends Component {
  render() {
    return (
        <form className="overview">
          <h1 id="header">Curriculum vitae</h1>
          <div className="general">
              <h2>General information</h2>
              <p>Name: {this.props.name}</p>
              <p>E-Mail: {this.props.email}</p>
              <p>Telephone: {this.props.telephone}</p>
          </div>
          <div className="education">
            <h2>Education experience</h2>
            <p>School name: {this.props.schoolname}</p>
            <p>Title of study: {this.props.titleofstudy}</p>
            <p>Date of study: {this.props.dateofstudy}</p>
          </div>
          <div className="practical">
            <h2>Practical experience</h2>
            <p>Company name: {this.props.companyname}</p>
            <p>Position title: {this.props.positiontitle}</p>
            <p>Date of work: {this.props.dateofwork}</p>
          </div>

        </form>
    )
  }
}

export {Overview}