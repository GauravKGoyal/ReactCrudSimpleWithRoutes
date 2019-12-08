import React, { Component } from "react";
import EmployeeForm from "./EmployeeForm";

class EditEmployee extends Component {
  render() {
    console.log(this.props.match.params.id);
    let employee = {
      id: this.props.match.params.id,
      firstName: "gaurav",
      lastName: "goyal"
    };
    return <EmployeeForm data={employee} action="Add"></EmployeeForm>;
  }
}

export default EditEmployee;
