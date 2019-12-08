import React, { Component } from "react";
import {employees} from "../../store";
import EmployeesTable from "./EmployeesTable";

class AllEmployees extends Component {
  render() {
    return <EmployeesTable rows={employees} totalRowsCount={100} history={this.props.history}/>;
  }
}

export default AllEmployees;
