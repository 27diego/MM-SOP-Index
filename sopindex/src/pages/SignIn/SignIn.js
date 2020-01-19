import React, { Component } from "react";
import "./SignIn.scss";

class SignIn extends Component {
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
          <h3 className="signIn__form__header">Log In</h3>
          <div className="signIn__form__group">
            <input
              type="text"
              className="signIn__form__input"
              id="username"
              placeholder="Username"
              required
            />
            <label className="signIn__form__label" htmlFor="username">
              Username
            </label>
          </div>
          <div className="signIn__form__group">
            <input
              type="password"
              className="signIn__form__input"
              id="password"
              placeholder="Password"
              required
            />
            <label className="signIn__form__label" htmlFor="password">
              Password
            </label>
          </div>
          <button className="signIn__form__btn">Log In</button>
          <div className="signIn__form__req">
            <span classNam="signIn__form__req-cred">Forgot Credentials</span>
            <span className="signIn__form__req-acc">Create Account</span>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
