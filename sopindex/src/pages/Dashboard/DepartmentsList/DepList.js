import React, { Component } from "react";
import "./DepList.scss";

class DepList extends Component {
  state = {
    departments: [
      {
        name: "QA",
        content: "file"
      },
      {
        name: "Packing",
        content: "file"
      },
      {
        name: "Harvesting",
        content: "file"
      },
      {
        name: "Growing",
        content: "file"
      },
      {
        name: "Mechanic",
        content: "file"
      },
      {
        name: "Safety",
        content: "file"
      }
    ],
    active: false
  };

  clickDep = flag => {
    this.setState({ active: flag });
  };

  render() {
    return (
      <div className="list">
        <h3 className="list__header">Departments</h3>
        <div className="departments">
          {this.state.departments.map(department => {
            return (
              <div
                onClick={() => this.clickDep(true)}
                key={department.name}
                className="departments__title"
              >
                {department.name}
              </div>
            );
          })}
        </div>
        <footer className="admin">AdminName</footer>
      </div>
    );
  }
}

export default DepList;
