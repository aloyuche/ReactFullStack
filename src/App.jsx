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
    // this.ChangeName = this.ChangeName.bind(this);
    // this.ChangeUsername = this.ChangeUsername.bind(this);
    // this.ChangeEmail = this.ChangeEmaile.bind(this);
    // this.ChangePassword = this.ChangePassword.bind(this);
    // this.onSubmit = this.onSubmit.bind(this);
  }

  ChangeName(event) {
    this.setState({
      name: event.target.value,
    });
  }
  ChangeUserame(event) {
    this.setState({
      username: event.target.value,
    });
  }
  ChangeEmail(event) {
    this.setState({
      email: event.target.value,
    });
  }
  ChangePassword(event) {
    this.setState({
      password: event.target.value,
    });
  }
  onSubmit(event) {
    event.preventDefault();

    const registered = {
      name: this.state.name,
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
    };
    axios
      .post("http://localhost:5000/api/signup", registered)
      .then((response) => console.log(response.data));
    this.setState({
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
            <h1 style={{ textAlign: "center" }} className="register mt-4">
              REGISTER HERE
            </h1>
            <form onSubmit={this.onSubmit} className="form-group mt-6">
              <input
                type="text"
                placeholder="Full Name"
                onChange={this.ChangeName}
                value={this.state.name}
                className="form-control form-group"
              />
              <br />
              <input
                type="text"
                placeholder="Username"
                onChange={this.ChangeUsername}
                value={this.state.username}
                className="form-control form-group"
              />
              <br />
              <input
                type="email"
                placeholder="Email Address"
                onChange={this.ChangeEmail}
                value={this.state.email}
                className="form-control form-group"
              />
              <br />
              <input
                type="password"
                placeholder="Password"
                onChange={this.ChangePassword}
                value={this.state.password}
                className="form-control form-group"
              />
              <br />
              <br />
              <input
                type="submit"
                value="Submit"
                className="btn btn-danger form-control form-group"
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}
