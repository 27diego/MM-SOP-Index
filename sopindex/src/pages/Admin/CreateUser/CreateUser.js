import React, { Component } from "react";
import "./CreateUser.scss";
import history from "../../../history";

class CreateUser extends Component {
  state = {
    accountType: "",
    userName: "",
    password: ""
  };

  selectType = type => {
    this.setState({ accountType: type });
  };

  onSubmit = () => {
    history.push("/Dashboard");
  };

  render() {
    console.log(this.state.accountType);

    return (
      <div className="container">
        <div className="menu">
          <h2 className="menu__header">Choose Account Type</h2>
          <div className="menu__options">
            <span
              onClick={() => this.selectType("menu")}
              className={`menu__options-menu ${
                this.state.accountType === "menu" ? "active" : ""
              } `}
            >
              <i className="fas fa-user-shield"></i>
            </span>
            <span
              onClick={() => this.selectType("user")}
              className={`menu__options-user ${
                this.state.accountType === "user" ? "active" : ""
              } `}
            >
              <i className="fas fa-users"></i>
            </span>
          </div>
          <div className="menu__choice-greeting">
            {this.state.accountType === ""
              ? "Select type"
              : this.state.accountType === "menu"
              ? "Welcome new menu"
              : "Welcome new user"}
          </div>
          <div className="menu__form">
            {/* <i class="fas fa-at"></i> */}
            <input
              className="menu__form-input"
              placeholder="Username"
              type="text"
              required
            />
            {/* <i class="fas fa-lock"></i> */}
            <input
              className="menu__form-input"
              placeholder="Password"
              type="password"
              required
            />
            <button onClick={this.onSubmit} className="menu__form-submit">
              Submit
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateUser;
