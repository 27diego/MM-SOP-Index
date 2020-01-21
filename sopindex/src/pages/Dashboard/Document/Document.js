import React, { Component } from "react";
import "./Document.scss";

class Document extends Component {
  render() {
    return <div className="documentC">{this.props.document}</div>;
  }
}

export default Document;
