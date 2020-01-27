import React, { Component } from "react";
import "./ManageUsers.scss";

class ManageUsers extends Component {
  state = {
    users: [
      {
        id: 0,
        name: "Isabel Savage",
        department: "QA",
        role: "Admin"
      },
      {
        id: 1,
        name: "Huff Patton",
        department: "QA",
        role: "User"
      },
      {
        id: 2,
        name: "Becky Marsh",
        department: "QA",
        role: "Admin"
      },
      {
        id: 3,
        name: "Gilda Bruce",
        department: "QA",
        role: "User"
      },
      {
        id: 4,
        name: "Ester Chang",
        department: "QA",
        role: "Admin"
      },
      {
        id: 5,
        name: "Castillo Moody",
        department: "QA",
        role: "User"
      },
      {
        id: 6,
        name: "Rosemary Griffith",
        department: "QA",
        role: "Admin"
      },
      {
        id: 7,
        name: "Jackie Mosley",
        department: "QA",
        role: "User"
      },
      {
        id: 8,
        name: "Cummings Atkinson",
        department: "QA",
        role: "Admin"
      },
      {
        id: 9,
        name: "Kay Romero",
        department: "QA",
        role: "User"
      }
    ]
  };
  render() {
    return (
      <div className="UsersDash">
        <div className="pane">
          <div className="pane__header">SOP Index</div>
          <div className="pane__item">
            <span>Manage Users</span>
          </div>
          <div className="pane__item">
            <span>Farm</span>
          </div>
          <div className="pane__footer">
            <span>Refresh Data</span>
          </div>
        </div>
        <div className="content">
          <div className="Uheader">
            <span className="Uheader__title"> Users</span>
            <select className="Uheader__select">
              <option>Active Users</option>
              <option>Awaiting Approval</option>
            </select>
            <input
              className="Uheader__input"
              type="text"
              placeholder="Search Users"
            />
            <button className="Uheader__btn">Add User</button>
            <div className="Uheader__managebtn">
              <div className="Uheader__managebtn-icon">&nbsp;</div>
            </div>
          </div>

          <div className="Users">
            <div className="Users__Uheader">
              <div className="Users__item">
                <span>Name</span> <span>Department</span>
                <span>Role</span>
              </div>
            </div>
            {this.state.users.map(user => (
              <div className="Users__item">
                <span>{user.name}</span> <span>{user.department}</span>
                <span>{user.role}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default ManageUsers;
