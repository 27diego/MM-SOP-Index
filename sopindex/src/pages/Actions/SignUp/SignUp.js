import React, { Component } from "react";
import "./SignUp.scss";

class CreateUser extends Component {
  state = {
    departments: [
      "QA",
      "Growing",
      "Harvesting",
      "Safety",
      "Maintenance",
      "Packing"
    ],
    name: "",
    department: ""
  };

  onSubmit = e => {
    e.preventDefault();
    console.log(this.state.name, this.state.department);
  };
  render() {
    return (
      <div className="container">
        <div className="content">
          <div className="form">
            <div className="form__header">
              <img
                className="form__header-img"
                src="https://www.montereymushrooms.com/hs-fs/hubfs/2018%20Website%20Assets/mm-logo@2x.png?width=452&height=244&name=mm-logo@2x.png"
                alt="MM logo"
              />
              <span className="form__header-title">Monterey Mushrooms</span>
            </div>
            <div className="form__des">
              <h2 className="form__des-title">Join us to view SOP Index</h2>
              <p className="form__des-describe">
                Submit request to view SOP index for all 6 departments outside
                of Farm. QA Supervisor will review request and send you
                credentials.
              </p>
            </div>
            <form onSubmit={this.onSubmit} className="form__content">
              <label htmlFor="name" className="form__content-namelabel">
                Full Name
              </label>
              <input
                id="name"
                onChange={e => this.setState({ name: e.target.value })}
                value={this.state.name}
                className="form__content-name"
                type="text"
                autoComplete="off"
                required
              />
              <label
                htmlFor="dep-drop"
                className="form__content-departmentlabel"
              >
                Department
              </label>
              <select
                onChange={e => this.setState({ department: e.target.value })}
                id="dep-drop"
                className="form__content__dropdown"
              >
                <option
                  key=""
                  className="form__content__dropdown-item"
                ></option>
                {this.state.departments.map(dep => (
                  <option key={dep} className="form__content__dropdown-item">
                    {dep}
                  </option>
                ))}
              </select>
              <button className="form__content-btn">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateUser;