import React , {Component} from "react";
import EmployeeForm from "./EmployeeForm";

class AddEmployee extends Component {
  render(){
    let employee = {id:1, firstName:"gaurav", lastName:"goyal"};
    return <EmployeeForm data={employee} action="Add"></EmployeeForm>;

  }
}

export default AddEmployee;
