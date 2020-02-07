import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./AdminModal.scss";

const AdminModal = () => {
  // const { top, bottom, left, right } = this.props.position;
  // console.log(top, right, left, bottom);

  const [admin, useAdmin] = useState({
    member: "user",
    admin: "Maritza"
  });

  return ReactDOM.createPortal(
    <div className="body">
      <div className="option">
        <div className="option__right">
          <div className="option__right-header">
            {admin.member === "admin"
              ? admin.admin === "Maritza"
                ? `Remove Admin Rights`
                : ""
              : `Give Admin Rights`}
          </div>
          <p className="option__right-description">
            {admin.member === "admin"
              ? admin.admin === "Maritza"
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
};

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
