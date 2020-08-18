import React, { Component } from 'react';
import UserService from '../services/user.service'

export default class UserList extends Component {

  constructor(props) {
    super(props)

    this.state = {
      users: []
    }
  }

  componentDidMount() {
    UserService.get()
    .then(users => {
      this.setState({
        users: users
      })
    })
  }

  render() {
    const users = this.state.users.map((user, index) => {
      return <p key={index}>{user.username}</p>
    })

    return (
      <span>{users}</span>
    )
  }
}