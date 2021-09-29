import React, { Component } from "react";

class Practical extends Component {
    render() {
        return (
            <form className="practicalW">
                <div className="companynameW">
                    <label htmlFor="companyname">Company name: </label>
                    <input onChange={this.props.handleChange} type="text" id="companyname" name="companyname" value={this.props.companyname}></input>
                </div>
                <div className="positiontitleW">
                    <label htmlFor="positiontitle">Position title: </label>
                    <input onChange={this.props.handleChange} type="text" id="positiontitle" name="positiontitle" value={this.props.positiontitle}></input>
                </div>
                <div className="dateofworkW">
                    <label htmlFor="dateofwork">Date of work: </label>
                    <input onChange={this.props.handleChange} type="text" id="dateofwork" name="dateofwork" value={this.props.dateofwork}></input>
                </div>
                    <button onClick={this.props.submit}>Submit</button>
                    <button onClick={this.props.edit}>Edit</button>
            </form>
        )
    }
}

export {Practical}