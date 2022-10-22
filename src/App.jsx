import React, { Component } from "react";
import "boostrap/dist/css/boostrap.min.css";
import "font-awesome/css/font-awesome.min.css";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      username: "",
      email: "",
      password: "",
    };
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

  render() {
    return (
      <div>
        <div className="container">
          <div className="form-div">
            <form action="">
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
                onChange={this.ChangeName}
                value={this.state.name}
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
