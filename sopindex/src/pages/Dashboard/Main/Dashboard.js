import React, { Component } from "react";
import "./Dashboard.scss";
import DepList from "../DepartmentsList/DepList";
import SOPList from "../SOPList/SOPList";

class Dashboard extends Component {
  state = {
    Department: ""
  };

  selectDep = name => {
    this.setState({ Department: name });
  };

  //we need three columns
  render() {
    return (
      <div className="dashboard">
        <div className="deplist">
          <DepList selectDep={this.selectDep} />
        </div>
        <div className="sops">
          <SOPList Department={this.state.Department} />
        </div>
        <div className="document">&nbsp;</div>
      </div>
    );
  }
}

export default Dashboard;
