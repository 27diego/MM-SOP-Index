import React, { Component } from "react";
import "./SOPList.scss";
// import { connect } from "react-redux";

class SOPList extends Component {
  state = {
    Growing: [
      {
        id: 1,
        name: "one",
        department: "Growing",
        category: "chemical",
        lastViewed: "01/21/2020"
      },
      {
        id: 2,
        name: "two",
        department: "Growing",
        category: "wash",
        lastViewed: "01/21/2020"
      },
      {
        id: 3,
        name: "three",
        department: "Growing",
        category: "chemical",
        lastViewed: "01/21/2020"
      },
      {
        id: 4,
        name: "break",
        department: "Growing",
        category: "employee",
        lastViewed: "01/21/2020"
      }
    ],
    Safety: [
      {
        id: 5,
        name: "one",
        department: "Safety",
        category: "chemical",
        lastViewed: "01/21/2020"
      },
      {
        id: 6,
        name: "two",
        department: "Safety",
        category: "wash",
        lastViewed: "01/21/2020"
      },
      {
        id: 7,
        name: "three",
        department: "Safety",
        category: "chemical",
        lastViewed: "01/21/2020"
      },
      {
        id: 8,
        name: "break",
        department: "Safety",
        category: "employee",
        lastViewed: "01/21/2020"
      }
    ],
    Harvesting: [
      {
        id: 9,
        name: "one",
        department: "Harvesting",
        category: "chemical",
        lastViewed: "01/21/2020"
      },
      {
        id: 10,
        name: "two",
        department: "Harvesting",
        category: "wash",
        lastViewed: "01/21/2020"
      },
      {
        id: 11,
        name: "three",
        department: "Harvesting",
        category: "chemical",
        lastViewed: "01/21/2020"
      },
      {
        id: 12,
        name: "break",
        department: "Harvesting",
        category: "employee",
        lastViewed: "01/21/2020"
      }
    ],
    Packing: [
      {
        id: 13,
        name: "one",
        department: "Packing",
        category: "chemical",
        lastViewed: "01/21/2020"
      },
      {
        id: 14,
        name: "two",
        department: "Packing",
        category: "wash",
        lastViewed: "01/21/2020"
      },
      {
        id: 15,
        name: "three",
        department: "Packing",
        category: "chemical",
        lastViewed: "01/21/2020"
      },
      {
        id: 16,
        name: "break",
        department: "Packing",
        category: "employee",
        lastViewed: "01/21/2020"
      }
    ],
    Maintenance: [
      {
        id: 17,
        name: "one",
        department: "Maintenance",
        category: "chemical",
        lastViewed: "01/21/2020"
      },
      {
        id: 18,
        name: "two",
        department: "Maintenance",
        category: "wash",
        lastViewed: "01/21/2020"
      },
      {
        id: 19,
        name: "three",
        department: "Maintenance",
        category: "chemical",
        lastViewed: "01/21/2020"
      },
      {
        id: 20,
        name: "break",
        department: "Maintenance",
        category: "employee",
        lastViewed: "01/21/2020"
      }
    ],
    QA: [
      {
        id: 21,
        name: "one",
        department: "QA",
        category: "chemical",
        lastViewed: "01/21/2020"
      },
      {
        id: 22,
        name: "two",
        department: "QA",
        category: "wash",
        lastViewed: "01/21/2020"
      },
      {
        id: 23,
        name: "three",
        department: "QA",
        category: "chemical",
        lastViewed: "01/21/2020"
      },
      {
        id: 24,
        name: "break",
        department: "QA",
        category: "employee",
        lastViewed: "01/21/2020"
      },
      {
        id: 25,
        name: "one",
        department: "QA",
        category: "chemical",
        lastViewed: "01/21/2020"
      },
      {
        id: 26,
        name: "two",
        department: "QA",
        category: "wash",
        lastViewed: "01/21/2020"
      },
      {
        id: 27,
        name: "three",
        department: "QA",
        category: "chemical",
        lastViewed: "01/21/2020"
      },
      {
        id: 28,
        name: "break",
        department: "QA",
        category: "employee",
        lastViewed: "01/21/2020"
      }
    ],
    selected: "",
    length: Number.MAX_VALUE
  };

  UNSAFE_componentWillReceiveProps() {
    if (this.props.Department) {
      this.setState({ length: this.state[this.props.Department].length });
    }
  }

  search = e => {
    console.log(e.target.value);
  };

  onClick = department => {
    const { id } = department;
    this.setState({ selected: id });
    this.props.selectDocument(id);
  };

  renderDep = name => {
    return this.state[this.props.Department].map(dep => (
      <div
        className="soplist__item"
        key={dep.id}
        onClick={() => this.onClick(dep)}
      >
        <div className="soplist__item-title">{dep.name}</div>
        <div className="soplist__footer">
          <span className="soplist__footer-date">
            Last Opened: {dep.lastViewed}
          </span>
        </div>
      </div>
    ));
  };

  setLength = length => {
    this.setState({ length });
  };

  renderAllDep = () => {
    //find better way to concat state arrays
    const allDep = [
      ...this.state["Growing"],
      ...this.state["Harvesting"],
      ...this.state["Maintenance"],
      ...this.state["Packing"],
      ...this.state["Safety"],
      ...this.state["QA"]
    ];

    return allDep.map(dep => (
      <div
        className="soplist__item"
        key={dep.id}
        onClick={() => this.onClick(dep)}
      >
        <div className="soplist__item-title">{dep.name}</div>
        <div className="soplist__footer">
          <span className="soplist__footer-date">
            Last Opened: {dep.lastViewed}
          </span>
          <span className="soplist__footer-dep">{dep.department}</span>
        </div>
      </div>
    ));
  };

  render() {
    const { Department } = this.props;
    return (
      <div className="soplist">
        <div className="soplist__header">SOP List</div>
        {this.state.length > 9 ? (
          <input
            onChange={this.search}
            className="soplist__search"
            type="text"
            placeholder="search"
          />
        ) : (
          ""
        )}
        {Department ? this.renderDep(Department) : this.renderAllDep()}
      </div>
    );
  }
}

//input bar does not update within first click

// const mapStateToProps = state => {
//   return { Department: state.SelectDepartment.department };
// };

// export default connect(mapStateToProps)(SOPList);

export default SOPList;
