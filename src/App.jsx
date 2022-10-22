import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import axios from "axios";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      username: "",
      email: "",
      password: "",
    };
    this.ChangeName = this.ChangeName.bind(this);
    this.ChangeUsername = this.ChangeUsername.bind(this);
    this.ChangeEmail = this.ChangeEmaile.bind(this);
    this.ChangePassword = this.ChangePassword.bind(this);
  }

  ChangeName(e) {
    this.setState({
      name: e.target.value,
    });
  }
  ChangeUserame(e) {
    this.setState({
      username: e.target.value,
    });
  }
  ChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }
  ChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }
  onSubmit(e) {
    e.preventDefault();

    const registered = {
      name: this.state.name,
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
    };
    axios
      .post("http://localhost:5000/api/signup", registered)
      .then((response) => console.log(response.data));
    this.state({
      name: "",
      username: "",
      email: "",
      password: "",
    });
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="form-div">
            <form onSubmit={this.onSubmit}>
              <input
                type="text"
                placeholder="Full Name"
                onChange={this.ChangeName}
                value={this.state.name}
                className="form-control form-group"
              />
              <input
                type="text"
                placeholder="Full Name"
                onChange={this.ChangeUsername}
                value={this.state.username}
                className="form-control form-group"
              />
              <input
                type="email"
                placeholder="Email Address"
                onChange={this.ChangeEmail}
                value={this.state.email}
                className="form-control form-group"
              />
              <input
                type="password"
                placeholder="Password"
                onChange={this.ChangePassword}
                value={this.state.password}
                className="form-control form-group"
              />
              <input
                type="submit"
                value="Submit"
                className="btn btn-danger btn-block"
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}
