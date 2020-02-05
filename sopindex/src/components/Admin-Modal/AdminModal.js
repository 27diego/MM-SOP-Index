import React from "react";
import ReactDOM from "react-dom";
import "./AdminModal.scss";

class AdminModal extends React.Component {
  state = {
    member: "user",
    admin: "Maritza"
  };

  render() {
    const { top, bottom, left, right } = this.props.position;
    // console.log(top, right, left, bottom);
    return ReactDOM.createPortal(
      <div
        className="body"
        style={{
          position: "absolute",
          top: 21,
          left: 787
        }}
      >
        <div className="option">
          <div className="option__right">
            <div className="option__right-header">
              {this.state.member === "admin"
                ? this.state.admin === "Maritza"
                  ? `Remove Admin Rights`
                  : ""
                : `Give Admin Rights`}
            </div>
            <p className="option__right-description">
              {this.state.member === "admin"
                ? this.state.admin === "Maritza"
                  ? `Remove Admin privileges`
                  : ""
                : `Can Manage SOPs and team members`}
            </p>
          </div>
          <div className="option__remove">
            <span>Remove user from Team</span>
          </div>
        </div>
      </div>,
      document.querySelector("#admin-modal")
    );
  }
}

export default AdminModal;

/*
<div className="body">
        <div className="option">
          <div className="option__right">
            <div className="option__right-header">Give Admin Rights</div>
            <p className="option__right-description">
              Can Manage SOPs and admin members
            </p>
          </div>
          <div className="option__remove">
            <span>Remove user from Team</span>
          </div>
        </div>
      </div> */
