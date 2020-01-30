import React from "react";
import ReactDOM from "react-dom";
import "./Modal.scss";
import history from "../../history";

export default function Modal() {
  return ReactDOM.createPortal(
    <div className="modal">
      <div onClick={() => history.push("/Users")} className="modal__item">
        <img
          className="modal__item-logo"
          src="https://img.icons8.com/windows/96/000000/users-settings.png"
          alt="users logo"
        />
        <div className="modal__item-header">Manage Users</div>
        <div className="modal__item-description">Add, edit, or drop Users</div>
      </div>
    </div>,
    document.querySelector("#modal")
  );
}
