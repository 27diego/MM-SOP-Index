import React, { useState } from "react";
import "./ManageSOP.scss";

export default function ManageSOP() {
  return (
    <div className="main">
      <div className="content">
        <div className="addheader">
          <h3 className="addheader__title">Upload Files</h3>
          <p className="addheader__problems">
            Having problems? <span>Email dev</span>
          </p>
        </div>
        <div className="addFiles">
          <div className="addFiles__field">Drop Files here...</div>
          <div className="addFiles__btnContainer">
            <button className="addFiles__btn">add Files</button>
          </div>
        </div>
        <div className="tab">
          <span>options</span>
        </div>
        <div className="type">
          <div className="type__item">
            <label htmlFor="name" className="type__label">
              Name
            </label>
            <input
              className="type__input"
              placeholder="Name"
              type="text"
              id="name"
              required
            />
          </div>
          <div className="type__item">
            <label className="type__label" htmlFor="cat">
              Type
            </label>
            <select className="type__dropdown" id="cat">
              <option className="type__option">Chemical</option>
              <option className="type__option">Cleaning</option>
            </select>
          </div>
          <div className="type__item">
            <label className="type__label" htmlFor="dept">
              Department
            </label>
            <select className="type__dropdown" id="dept">
              <option className="type__option">Growing</option>
              <option className="type__option">Harvesting</option>
              <option className="type__option">Safety</option>
              <option className="type__option">Mechanics</option>
              <option className="type__option">Packing</option>
              <option className="type__option">QA</option>
            </select>
          </div>
        </div>

        <div className="confirm">
          <button className="confirm__btn">Upload File</button>
          <span className="confirm__or">or</span>
          <span className="confirm__cancel">Cancel</span>
        </div>
      </div>
    </div>
  );
}
