import React, { Component } from 'react';
// import { api } from '../http'
import UserService from '../services/user.service'

export default class CreateUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      error: null,
    }

    this.onChangeUsername = this.onChangeUsername.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChangeUsername(e) {
    this.setState({ username: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault();

    const user = { username: this.state.username }
    UserService.add(user)
    .then(() => {
      this.setState({
        username: '',
        error: null,
      })
    })
    .catch(() => {
      this.setState({
        error: true,
      })
    })
  }

  render() {
    return (
      <div className="container">
      <h3>Create New User</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <label>Username: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}
              />

          { this.state.error ? <p className="text-danger">Oops! an occurred error!</p> : '' }
        </div>

        <div className="form-group">
          <input type="submit" value="Create Exercise Log" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}