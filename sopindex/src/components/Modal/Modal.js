import React from "react";
import ReactDOM from "react-dom";
import "./Modal.scss";
import history from "../../history";
import ManageSOP from "../../pages/Admin/ManageSOPs/ManageSOP";

export default function Modal({ hideModal }) {
  return ReactDOM.createPortal(
    <div className="modal">
      <div onClick={() => hideModal()} className="modal__exit">
        &nbsp;
      </div>
      <div onClick={() => history.push("/Users")} className="modal__item">
        <img
          className="modal__item-logo"
          src="https://img.icons8.com/windows/96/000000/users-settings.png"
          alt="users logo"
        />
        <div className="modal__item-header">Manage Users</div>
        <div className="modal__item-description">Add, edit, or drop Users</div>
      </div>
      <div onClick={() => history.push("/SOPs")} className="modal__item">
        <img
          src="https://img.icons8.com/ios/50/000000/document.png"
          className="modal__item-logo"
          alt="users logo"
        />

        <div className="modal__item-header">Manage SOPs</div>
        <div className="modal__item-description">Add, edit, or drop SOPs</div>
      </div>
    </div>,
    document.querySelector("#modal")
  );
}
