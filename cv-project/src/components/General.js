import React, { Component } from "react";

class General extends Component {

    render() {
        return (
            <form className="generalW">
                <div className="nameW">
                    <label htmlFor="name">Name: </label>
                    <input onChange={this.props.handleChange} type="text" id="name" name="name" value={this.props.name}></input>
                </div>
                <div className="emailW">
                <label htmlFor="email">E-Mail: </label>
                <input onChange={this.props.handleChange} type="text" id="email" name="email" value={this.props.email}></input>
                </div>
                <div className="telephoneW">
                <label htmlFor="telephone">Telephone: </label>
                <input onChange={this.props.handleChange} type="text" id="telephone" name="telephone" value={this.props.telephone}></input>
                </div>

                <button onClick={this.props.submit}>Submit</button>
                <button onClick={this.props.edit}>Edit</button>
            </form>
        )
    }
}

export {General}