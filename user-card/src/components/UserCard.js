import React, { Component } from 'react'
import './UserCard.css'

export default class UserCard extends Component {
    state = {
        userHasName: false,
    }

    componentDidMount() {
        if (this.props.user.name !== null) {
            this.setState({userHasName: true});
        }
    }

    render() {
        return (
            <div className={this.props.main}>
                <img src={this.props.user.avatar_url} alt="user" />
                <div className="information">
                    <h2>{this.state.userHasName ? `${this.props.user.name}` : `${this.props.user.login}`}</h2>
                    <h3>{this.props.user.login}</h3>
                    <p>{this.props.user.location}</p>
                    <a href={this.props.user.html_url}>{this.props.user.html_url}</a>
                </div>
            </div>
        )
    }
}
