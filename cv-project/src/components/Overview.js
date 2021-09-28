import React, { Component } from "react";

class Overview extends Component {
  render() {
    return (
        <form>
            <p>Name: {this.props.name}</p>
            <p>E-Mail: {this.props.email}</p>
            <p>Telephone: {this.props.telephone}</p>
        </form>
    )
  }
}

export {Overview}