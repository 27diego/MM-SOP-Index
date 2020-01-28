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
    return <div>hello users</div>;
  }
}

export default ManageUsers;
