import React, { Component } from "react";
import { Link } from "react-router-dom";
import history from "../../history";
import "./SignIn.scss";

class SignIn extends Component {
  state = {
    username: "",
    password: ""
  };

  onUserNameChange = e => {
    this.setState({ username: e.target.value });
  };

  onPasswordChange = e => {
    this.setState({ password: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    console.log(
      "username: ",
      this.state.username,
      " password: ",
      this.state.password
    );

    history.push("/Dashboard");
  };

  render() {
    return (
      <div className="signIn">
        <header className="signIn__header">
          <img
            className="signIn__header__img"
            alt="MM Logo"
            src="https://www.montereymushrooms.com/hs-fs/hubfs/2018%20Website%20Assets/mm-logo@2x.png?width=452&height=244&name=mm-logo@2x.png"
          />
          <h2 className="signIn__header__title">SOP Index</h2>
        </header>
        <form className="signIn__form">
          <div className="left">
            <h3 className="signIn__form__header">Log In</h3>
            <div className="signIn__form__group">
              <input
                onChange={e => this.onUserNameChange(e)}
                type="text"
                className="signIn__form__input"
                id="username"
                placeholder="Username *"
                autoComplete="off"
                value={this.state.username}
                required
              />
              <label className="signIn__form__label" htmlFor="username">
                Username
              </label>
            </div>
            <div className="signIn__form__group">
              <input
                onChange={e => this.onPasswordChange(e)}
                type="password"
                className="signIn__form__input"
                id="password"
                placeholder="Password *"
                autoComplete="off"
                value={this.state.password}
                required
              />
              <label className="signIn__form__label" htmlFor="password">
                Password
              </label>
            </div>
            <button onClick={this.onSubmit} className="signIn__form__btn">
              Log In
            </button>
            <div className="signIn__form__req">
              <Link
                className="signIn__form__req-cred"
                to={{
                  pathname: "/User/signUp",
                  state: {
                    forgot: true
                  }
                }}
              >
                Forgot Credentials
              </Link>
              <Link
                className="signIn__form__req-acc"
                to={{
                  pathname: "/User/signUp",
                  state: {
                    forgot: false
                  }
                }}
              >
                Create Account
              </Link>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
