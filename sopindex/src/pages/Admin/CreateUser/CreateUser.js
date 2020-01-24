import React, { Component } from "react";
import "./CreateUser.scss";

class CreateUser extends Component {
  state = {
    accountType: ""
  };

  render() {
    return (
      <div className="container">
        <div className="modal">
          <h2 className="modal__header">Choose Account Type</h2>
          <div className="modal__options">
            <span className="modal__options-admin">
              <i className="fas fa-user-shield"></i>
            </span>
            <span className="modal__options-user">
              <i className="fas fa-users"></i>
            </span>
          </div>
          <div className="modal_">user greedings</div>
          <div className="modal__form">
            <input className="modal__form-input" type="text" required />
            <input className="modal__form-input" type="password" required />
            <button className="modal__form-submit">Submit</button>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateUser;
