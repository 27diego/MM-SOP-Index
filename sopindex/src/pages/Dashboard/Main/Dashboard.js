import React, { useState } from "react";
import "./Dashboard.scss";
import DepList from "../DepartmentsList/DepList";
import SOPList from "../SOPList/SOPList";
import SOP from "../SOP/SOP";

import Modal from "../../../components/Modal/Modal";
import Overlay from "../../../components/Overlay/Overlay";

// import { CSSTransition } from "react-transition-group";

const Dashboard = () => {
  const [Department, UseDepartment] = useState("");
  const [Document, UseDocument] = useState("");
  const [ShowModal, UseShowModal] = useState(false);

  const selectDep = name => {
    UseDepartment({ name });
  };

  const selectDocument = doc => {
    UseDocument({ Document: doc });
  };

  const hideModal = () => {
    UseShowModal({ ShowModal: false });
  };

  const handleModal = () => {
    ShowModal === false
      ? UseShowModal({ ShowModal: true })
      : UseShowModal({ ShowModal: false });
  };

  //we need three columns
  return (
    <div className="dashboard" style={{ zIndex: 1 }}>
      <div className="deplist">
        <DepList
          selectDep={selectDep}
          handleModal={handleModal}
          modal={ShowModal}
        />
      </div>
      <div className="sops">
        <SOPList Department={Department} selectDocument={selectDocument} />
      </div>
      <div className="document">
        <SOP document={Document ? Document : 1} />
      </div>
      {ShowModal === false ? (
        ""
      ) : (
        <div className="mainModal">
          <Modal hideModal={hideModal} />
          <Overlay hideModal={hideModal} />
        </div>
      )}
    </div>
  );
};

export default Dashboard;
