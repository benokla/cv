import React, { Component } from "react";

class Overview extends Component {
  render() {
    return (
        <form>
            <p>Name: {this.props.name}</p>
            <p>E-Mail: </p>
            <p>Telephone: </p>
        </form>
    )
  }
}

export {Overview}