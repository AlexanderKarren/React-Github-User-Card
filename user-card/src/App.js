import React, { Component } from 'react';
import UserList from './components/UserList';
import axios from 'axios';
import './App.css';

export default class App extends Component {
  state = {
    userData: []
  }

  componentDidMount() {
    this.getData("AlexanderKarren");
  }

  getData = username => {
    axios.get(`https://api.github.com/users/${username}`)
    .then(response => {
      let userList = [response.data];
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
    })
  }

  render() {
    console.log(this.state.userData)
    return (
      <div className="app-container">
        <h1><i class="fab fa-github"></i>Github User Card</h1>
        <UserList userData={this.state.userData}/>
      </div>
    )
  }
}
