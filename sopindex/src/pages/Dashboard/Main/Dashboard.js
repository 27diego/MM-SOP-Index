import React, { Component } from "react";
import "./Dashboard.scss";
import DepList from "../DepartmentsList/DepList";

class Dashboard extends Component {
  //we need three columns
  render() {
    return (
      <div className="dashboard">
        <div className="deplist">
          <DepList />
        </div>
        <div className="sops">&nbsp;</div>
        <div className="document">&nbsp;</div>
      </div>
    );
  }
}

export default Dashboard;
