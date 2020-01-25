import React from "react";
import ReactDOM from "react-dom";

import "./Overlay.scss";

export default function Overlay({ hideModal }) {
  return ReactDOM.createPortal(
    <div onClick={() => hideModal()} className="--overlay">
      &nbsp;
    </div>,
    document.querySelector("#overlay")
  );
}
