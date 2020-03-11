import React, { Component } from 'react';
import UserForm from './components/UserForm';
import UserList from './components/UserList';
import axios from 'axios';
import './App.css';

export default class App extends Component {
  state = {
    userData: [],
    displayUsers: false,
    userFound: true,
  }

  setUsername = value => {
    this.getData(value);
    this.setState({displayUsers: true});
  }

  getData = username => {
    axios.get(`https://api.github.com/users/${username}`)
    .then(response => {
      console.log(response)
      let userList = [response.data];
      this.setState({userFound: true});
      axios.get(`https://api.github.com/users/${username}/followers`)
      .then(followersRes => {
        followersRes.data.map(follower => {
          axios.get(follower.url)
          .then(followerRes => {
            userList.push(followerRes.data);
            this.setState({userData: [...userList]})
          })
          .catch(followerErr => {
            console.log(followerErr);
          })
        })
      })
      .catch(followersErr => {
        console.log(followersErr);
      })
    })
    .catch(error => {
      console.log(error);
      this.setState({userFound: false})
    })
  }

  render() {
    return (
      <div className="app-container">
        <h1><i className="fab fa-github"></i>Github User Card</h1>
        <UserForm setUsername={this.setUsername} userFound={this.state.userFound}/>
        <UserList userData={this.state.userData}/>
      </div>
    )
  }
}
