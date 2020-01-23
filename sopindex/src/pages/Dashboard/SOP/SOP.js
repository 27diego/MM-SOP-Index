import React, { useState } from "react";
import "./SOP.scss";

export default function SOP({ document }) {
  const [docNumber, setdocNumber] = useState(0);
  setdocNumber(document);

  return <div className="documentC">{docNumber}</div>;
}
