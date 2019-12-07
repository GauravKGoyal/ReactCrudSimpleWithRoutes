import React from "react";
import { Route, HashRouter } from "react-router-dom";
import AllEmployee from "../Employee/AllEmployees";
import AddEmployee from "../Employee/AddEmployee";
import EditEmployee from "../Employee/AddEmployee";
import Login from "../Login";

export default function Body() {
  return (
    <div>
      sdaffasd
      <HashRouter>
        <div className="container">
          <Route exact path="/Employees" component={AllEmployee} />
          <Route exact path="/AddEmployee" component={AddEmployee} />
          <Route exact path="/EditEmployee/:id" component={EditEmployee} />
          <Route exact path="/Login" component={Login} />
        </div>
      </HashRouter>
    </div>
  );
}
