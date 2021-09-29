import React, { Component } from "react";

class Education extends Component {
    render() {
        return (
            <form className="educationW">
                <div className="schoolnameW">
                    <label htmlFor="schoolname">School name: </label>
                    <input onChange={this.props.handleChange} type="text" id="schoolname" name="schoolname" value={this.props.schoolname}></input>
                </div>
                <div className="titleofstudyW">
                    <label htmlFor="titleofstudy">Title of study: </label>
                    <input onChange={this.props.handleChange} type="text" id="titleofstudy" name="titleofstudy" value={this.props.titleofstudy}></input>
                </div>
                <div className="dateofstudyW">
                    <label htmlFor="dateofstudy">Date of study: </label>
                    <input onChange={this.props.handleChange} type="text" id="dateofstudy" name="dateofstudy" value={this.props.dateofstudy}></input>
               </div>
                <button onClick={this.props.submit}>Submit</button>
                <button onClick={this.props.edit}>Edit</button>
            </form>
        )
    }
}

export {Education}