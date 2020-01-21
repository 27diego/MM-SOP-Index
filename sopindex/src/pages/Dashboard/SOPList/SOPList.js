import React, { Component } from "react";
import "./SOPList.scss";
// import { connect } from "react-redux";

class SOPList extends Component {
  state = {
    Growing: [
      {
        id: 1,
        name: "one",
        category: "chemical",
        lastViewed: ""
      },
      {
        id: 2,
        name: "two",
        category: "wash",
        lastViewed: ""
      },
      {
        id: 3,
        name: "three",
        category: "chemical",
        lastViewed: ""
      },
      {
        id: 4,
        name: "break",
        category: "employee",
        lastViewed: ""
      }
    ],
    Safety: [
      {
        id: 5,
        name: "one",
        category: "chemical",
        lastViewed: ""
      },
      {
        id: 6,
        name: "two",
        category: "wash",
        lastViewed: ""
      },
      {
        id: 7,
        name: "three",
        category: "chemical",
        lastViewed: ""
      },
      {
        id: 8,
        name: "break",
        category: "employee",
        lastViewed: ""
      }
    ],
    Harvesting: [
      {
        id: 9,
        name: "one",
        category: "chemical",
        lastViewed: ""
      },
      {
        id: 10,
        name: "two",
        category: "wash",
        lastViewed: ""
      },
      {
        id: 11,
        name: "three",
        category: "chemical",
        lastViewed: ""
      },
      {
        id: 12,
        name: "break",
        category: "employee",
        lastViewed: ""
      }
    ],
    Packing: [
      {
        id: 13,
        name: "one",
        category: "chemical",
        lastViewed: ""
      },
      {
        id: 14,
        name: "two",
        category: "wash",
        lastViewed: ""
      },
      {
        id: 15,
        name: "three",
        category: "chemical",
        lastViewed: ""
      },
      {
        id: 16,
        name: "break",
        category: "employee",
        lastViewed: ""
      }
    ],
    Maintenance: [
      {
        id: 17,
        name: "one",
        category: "chemical",
        lastViewed: ""
      },
      {
        id: 18,
        name: "two",
        category: "wash",
        lastViewed: ""
      },
      {
        id: 19,
        name: "three",
        category: "chemical",
        lastViewed: ""
      },
      {
        id: 20,
        name: "break",
        category: "employee",
        lastViewed: ""
      }
    ],
    QA: [
      {
        id: 21,
        name: "one",
        category: "chemical",
        lastViewed: ""
      },
      {
        id: 22,
        name: "two",
        category: "wash",
        lastViewed: ""
      },
      {
        id: 23,
        name: "three",
        category: "chemical",
        lastViewed: ""
      },
      {
        id: 24,
        name: "break",
        category: "employee",
        lastViewed: ""
      },
      {
        id: 25,
        name: "one",
        category: "chemical",
        lastViewed: ""
      },
      {
        id: 26,
        name: "two",
        category: "wash",
        lastViewed: ""
      },
      {
        id: 27,
        name: "three",
        category: "chemical",
        lastViewed: ""
      },
      {
        id: 28,
        name: "break",
        category: "employee",
        lastViewed: ""
      }
    ],
    selected: ""
  };

  /*
   - we need to have some kind of list where we will have the department name and list of documents with headers related to that deparment
   - if no department is selected show all documents
  */

  selectDoc = doc => {
    this.setState({ selected: doc });
    this.props.selectDocument(doc);
  };

  renderDep = name => {
    return this.state[this.props.Department].map(dep => (
      <div className="soplist__item" onClick={() => this.selectDoc(dep.id)}>
        {dep.name}
      </div>
    ));
  };

  renderAllDep = () => {
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
        onClick={() => this.selectDoc(dep.id)}
      >
        {dep.name}
      </div>
    ));
  };

  render() {
    console.log(this.state.selected);
    const { Department } = this.props;
    return (
      <div className="soplist">
        <input className="soplist__search" type="text" placeholder="search" />
        {Department ? this.renderDep(Department) : this.renderAllDep()}
      </div>
    );
  }
}

// const mapStateToProps = state => {
//   return { Department: state.SelectDepartment.department };
// };

// export default connect(mapStateToProps)(SOPList);

export default SOPList;
