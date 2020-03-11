import React, { Component } from 'react'
import './UserForm.css'

export default class UserForm extends Component {
    state = {
        value: "",
        username: "",
    }

    handleChange = event => {
        this.setState({value: event.target.value})
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({username: this.state.value})
        this.props.setUsername(this.state.value)
    }

    render() {
        return (
            <div className="form-container">
                <form onSubmit={this.handleSubmit}>
                    <h2>Enter a github username to begin</h2>
                    <input type="text" placeholder="enter github username" value={this.state.value} onChange={this.handleChange}/>
                    <button type="submit">Go</button>
                    <div style={this.props.userFound ? {opacity: 0} : {opacity: 100}} className="error">Couldn't fetch data</div>
                </form>
                <img style={this.props.displayGraph ? {display: "block"} : {display: "none"}} src={`http://ghchart.rshah.org/${this.state.username}`} alt={`${this.state.username}'s github chart`} />
            </div>
        )
    }
}
