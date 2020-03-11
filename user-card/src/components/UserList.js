import React, { Component } from 'react'
import UserCard from './UserCard'
import './UserList.css'

export default class UserList extends Component {
    render() {
        return (
            <div className="list-container">
                {this.props.userData.map((user, index) => {
                    let className = "card-container";
                    if (index === 0) {
                        className = "card-container main";
                    }
                    return <UserCard key={user.id} user={user} main={className}/>
                })}
            </div>
        )
    }
}
