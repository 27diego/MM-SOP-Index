import React, { Component } from "react";
import "./Dashboard.scss";
import DepList from "../DepartmentsList/DepList";
import SOPList from "../SOPList/SOPList";
import SOP from "../SOP/SOP";

import Modal from "../../../components/Modal/Modal";
import Overlay from "../../../components/Overlay/Overlay";

import { CSSTransition } from "react-transition-group";

class Dashboard extends Component {
  state = {
    Department: "",
    Doc: "",
    showModal: false
  };

  selectDep = name => {
    this.setState({ Department: name });
  };

  selectDocument = doc => {
    this.setState({ Doc: doc });
  };

  hideModal = () => {
    this.setState({ showModal: false });
  };

  handleModal = () => {
    this.state.showModal === false
      ? this.setState({ showModal: true })
      : this.setState({ showModal: false });
  };

  //we need three columns
  render() {
    console.log(this.state.showModal);
    return (
      <div className="dashboard" style={{ zIndex: 1 }}>
        <div className="deplist">
          <DepList
            selectDep={this.selectDep}
            handleModal={this.handleModal}
            modal={this.state.showModal}
          />
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
        {this.state.showModal === false ? (
          ""
        ) : (
          <div className="mainModal">
            <CSSTransition
              in={this.state.showModal}
              appear={true}
              timeout={400}
              classNames="fade"
            >
              <Modal hideModal={this.hideModal} />
            </CSSTransition>
            <Overlay hideModal={this.hideModal} />
          </div>
        )}
      </div>
    );
  }
}

export default Dashboard;
