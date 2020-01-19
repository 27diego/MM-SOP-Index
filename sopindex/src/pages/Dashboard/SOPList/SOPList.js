import React, { Component } from "react";
// import { connect } from "react-redux";

class SOPList extends Component {
  state = {
    Growing: [
      {
        id: 1,
        name: "one",
        category: "chemical"
      },
      {
        id: 2,
        name: "two",
        category: "wash"
      },
      {
        id: 3,
        name: "three",
        category: "chemical"
      },
      {
        id: 4,
        name: "break",
        category: "employee"
      }
    ],
    Safety: [
      {
        id: 5,
        name: "one",
        category: "chemical"
      },
      {
        id: 6,
        name: "two",
        category: "wash"
      },
      {
        id: 7,
        name: "three",
        category: "chemical"
      },
      {
        id: 8,
        name: "break",
        category: "employee"
      }
    ],
    Harvesting: [
      {
        id: 9,
        name: "one",
        category: "chemical"
      },
      {
        id: 10,
        name: "two",
        category: "wash"
      },
      {
        id: 11,
        name: "three",
        category: "chemical"
      },
      {
        id: 12,
        name: "break",
        category: "employee"
      }
    ],
    Packing: [
      {
        id: 13,
        name: "one",
        category: "chemical"
      },
      {
        id: 14,
        name: "two",
        category: "wash"
      },
      {
        id: 15,
        name: "three",
        category: "chemical"
      },
      {
        id: 16,
        name: "break",
        category: "employee"
      }
    ],
    Maintenance: [
      {
        id: 17,
        name: "one",
        category: "chemical"
      },
      {
        id: 18,
        name: "two",
        category: "wash"
      },
      {
        id: 19,
        name: "three",
        category: "chemical"
      },
      {
        id: 20,
        name: "break",
        category: "employee"
      }
    ],
    QA: [
      {
        id: 21,
        name: "one",
        category: "chemical"
      },
      {
        id: 22,
        name: "two",
        category: "wash"
      },
      {
        id: 23,
        name: "three",
        category: "chemical"
      },
      {
        id: 24,
        name: "break",
        category: "employee"
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
      <div onClick={() => this.selectDoc(dep.id)}>{dep.name}</div>
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
      <div onClick={() => this.selectDoc(dep.id)}>{dep.name}</div>
    ));
  };

  render() {
    console.log(this.state.selected);
    const { Department } = this.props;
    return (
      <div>{Department ? this.renderDep(Department) : this.renderAllDep()}</div>
    );
  }
}

// const mapStateToProps = state => {
//   return { Department: state.SelectDepartment.department };
// };

// export default connect(mapStateToProps)(SOPList);

export default SOPList;
