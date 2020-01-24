import React, { Component } from "react";
import "./Dashboard.scss";
import DepList from "../DepartmentsList/DepList";
import SOPList from "../SOPList/SOPList";
import SOP from "../SOP/SOP";

class Dashboard extends Component {
  state = {
    Department: "",
    Doc: ""
  };

  selectDep = name => {
    this.setState({ Department: name });
  };

  selectDocument = doc => {
    this.setState({ Doc: doc });
  };

  //we need three columns
  render() {
    return (
      <div className="dashboard">
        <div className="deplist">
          <DepList selectDep={this.selectDep} />
        </div>
        <div className="sops">
          <SOPList
            Department={this.state.Department}
            selectDocument={this.selectDocument}
          />
        </div>
        <div className="document">
          <SOP document={this.state.Doc ? this.state.Doc : 1} />
        </div>
      </div>
    );
  }
}

export default Dashboard;
