import React from "react";
import AllEmployees from "../Employee/AllEmployees";
import EmployeeForm from "../Employee/EmployeeForm";
import Login from "../Login";
import { Route, HashRouter, BrowserRouter } from "react-router-dom";


export default function Body() {
  return (
    <div>
      <Route exact path="/" component={AllEmployees} />
      <Route exact path="/Login" component={Login} />
      <Route exact path="/employees/add" component={EmployeeForm} />
      <Route path="/employees/edit/:id" component={EmployeeForm} />
    </div>
  );
}
