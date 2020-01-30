import React from "react";
import ReactDOM from "react-dom";
import "./AdminModal.scss";

export default function AdminModal({ hideModal }) {
  return ReactDOM.createPortal(
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
    </div>,
    document.querySelector("#admin-modal")
  );
}
