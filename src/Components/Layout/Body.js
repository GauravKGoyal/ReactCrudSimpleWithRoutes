import React from "react";
import EmployeesTable from "../Employee/EmployeesTable";
import EmployeeForm from "../Employee/EmployeeForm";
import Login from "../Login";
import { Route } from "react-router-dom";
import { Paper } from "@material-ui/core";



export default function Body() {
  return (
    <Paper
    square
    style={{
      paddingTop: 16,
      paddingBottom: 16,
      paddingLeft: 24,
      paddingRight: 24,
      marginTop: 10,
      marginBottom: 10
    }}
  >
      <Route exact path="/" component={EmployeesTable} />
      <Route exact path="/Login" component={Login} />
      <Route exact path="/employees/add" component={EmployeeForm} />
      <Route path="/employees/edit/:id" component={EmployeeForm} />
    </Paper>
  );
}
