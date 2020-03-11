import React, { Component } from 'react'
import UserCard from './UserCard'
import './UserList.css'

export default class UserList extends Component {
    render() {
        return (
            <div className="list-container">
                {this.props.userData.map(user => {
                    return <UserCard user={user} />
                })}
            </div>
        )
    }
}
