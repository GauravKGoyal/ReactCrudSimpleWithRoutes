import React from "react";
import AllEmployees from "../Employee/AllEmployees";
import AddEmployee from "../Employee/AddEmployee";
import EditEmployee from "../Employee/EditEmployee";
import Login from "../Login";
import { Route, HashRouter, BrowserRouter } from "react-router-dom";

export default function Body() {
  return (
    <div>
      <Route exact path="/" component={AllEmployees} />
      <Route exact path="/Login" component={Login} />
      <Route exact path="/AddEmployee" component={AddEmployee} />
      <Route path="/employee/edit/:id" component={EditEmployee} />
    </div>
  );
}
