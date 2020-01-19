import React, { Component } from "react";
// import { connect } from "react-redux";

class SOPList extends Component {
  state = {};

  /*
   - we need to have some kind of list where we will have the department name and list of documents with headers related to that deparment
   - if no department is selected show all documents
  */

  render() {
    return (
      <div>
        {this.props.Department
          ? this.props.Department
          : "should be showing all"}
      </div>
    );
  }
}

// const mapStateToProps = state => {
//   return { Department: state.SelectDepartment.department };
// };

// export default connect(mapStateToProps)(SOPList);

export default SOPList;
