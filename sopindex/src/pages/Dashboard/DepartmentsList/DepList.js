import React, { Component } from "react";
import "./DepList.scss";
import history from "../../../history";
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
    ],
    active: ""
  };

  handleClick = name => {
    this.props.selectDep(name);
    this.setState({ active: name });
  };

  renderList = name => {
    switch (name) {
      case "QA":
        return (
          <div
            onClick={() => this.handleClick(name)}
            key={name}
            className={`departments__title ${
              this.state.active === name ? "active" : ""
            }`}
          >
            <i className="fas fa-utensils" />
            <span className="departments__title-name">{name}</span>
          </div>
        );

      case "Maintenance":
        return (
          <div
            onClick={() => this.handleClick(name)}
            key={name}
            className={`departments__title ${
              this.state.active === name ? "active" : ""
            }`}
          >
            <i className="fas fa-wrench" />
            <span className="departments__title-name">{name}</span>
          </div>
        );

      case "Harvesting":
        return (
          <div
            onClick={() => this.handleClick(name)}
            key={name}
            className={`departments__title ${
              this.state.active === name ? "active" : ""
            }`}
          >
            <i className="fab fa-pagelines" />
            <span className="departments__title-name">{name}</span>
          </div>
        );

      case "Growing":
        return (
          <div
            onClick={() => this.handleClick(name)}
            key={name}
            className={`departments__title ${
              this.state.active === name ? "active" : ""
            }`}
          >
            <i className="fas fa-seedling" />
            <span className="departments__title-name">{name}</span>
          </div>
        );

      case "Safety":
        return (
          <div
            onClick={() => this.handleClick(name)}
            key={name}
            className={`departments__title ${
              this.state.active === name ? "active" : ""
            }`}
          >
            <i className="fas fa-hard-hat" />
            <span className="departments__title-name">{name}</span>
          </div>
        );

      case "Packing":
        return (
          <div
            onClick={() => this.handleClick(name)}
            key={name}
            className={`departments__title ${
              this.state.active === name ? "active" : ""
            }`}
          >
            <i className="fas fa-box" />
            <span className="departments__title-name">{name}</span>
          </div>
        );

      default:
        return;
    }
  };

  tempClick = () => {
    this.setState({ active: "" });
  };
  logOut = () => {
    history.push("/");
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
          <div className="line">&nbsp;</div>
          <div className="admin__footer">
            <span className="admin__footer-admin">Admin</span>
            <span className="admin__footer-logout" onClick={this.logOut}>
              logout
            </span>
          </div>
        </footer>
      </div>
    );
  }
}

// export default connect(null, { selectDep })(DepList);

export default DepList;
