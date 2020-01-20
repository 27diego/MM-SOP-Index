import React, { Component } from "react";
import "./DepList.scss";
// import { selectDep } from "../../../Redux/actions";
// import { connect } from "react-redux";

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
        name: "Maintenance",
        content: "file"
      },
      {
        name: "Safety",
        content: "file"
      }
    ]
  };

  renderList = name => {
    switch (name) {
      case "QA":
        return (
          <div
            onClick={() => this.props.selectDep(name)}
            key={name}
            className="departments__title"
          >
            {/* <img className="departments__img" alt="QA icon" /> */}
            <i class="fas fa-utensils"></i>
            {name}
          </div>
        );

      case "Maintenance":
        return (
          <div
            onClick={() => this.props.selectDep(name)}
            key={name}
            className="departments__title"
          >
            <i class="fas fa-wrench"></i>
            {name}
          </div>
        );

      case "Harvesting":
        return (
          <div
            onClick={() => this.props.selectDep(name)}
            key={name}
            className="departments__title"
          >
            <i class="fab fa-pagelines"></i>
            {name}
          </div>
        );

      case "Growing":
        return (
          <div
            onClick={() => this.props.selectDep(name)}
            key={name}
            className="departments__title"
          >
            <i class="fas fa-seedling"></i>
            {name}
          </div>
        );

      case "Safety":
        return (
          <div
            onClick={() => this.props.selectDep(name)}
            key={name}
            className="departments__title"
          >
            <i class="fas fa-hard-hat"></i>
            {name}
          </div>
        );

      case "Packing":
        return (
          <div
            onClick={() => this.props.selectDep(name)}
            key={name}
            className="departments__title"
          >
            <i class="fas fa-box"></i>
            {name}
          </div>
        );

      default:
        return;
    }
  };

  render() {
    return (
      <div className="list">
        <h3 className="list__header">Departments</h3>
        <div className="departments">
          {this.state.departments.map(department => {
            return this.renderList(department.name);
          })}
        </div>
        <footer className="admin">
          <div className="admin__footer">{"Admin"}</div>
        </footer>
      </div>
    );
  }
}

// export default connect(null, { selectDep })(DepList);

export default DepList;
