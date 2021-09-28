import React, { Component } from "react";

class General extends Component {

    render() {
        return (
            <form>
                <label htmlFor="name">Name: </label>
                <input onChange={this.props.handleChange} type="text" id="name"></input>
                <label htmlFor="email">E-Mail: </label>
                <input onChange={this.props.handleChange} type="text" id="email"></input>
                <label htmlFor="telephone">Telephone: </label>
                <input onChange={this.props.handleChange} type="text" id="telephone"></input>
                <button onClick={this.props.submit}>Submit</button>
                <button>Edit</button>
            </form>
        )
    }
}

export {General}