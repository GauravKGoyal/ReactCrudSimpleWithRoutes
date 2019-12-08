import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Typography } from "@material-ui/core";
import { employees } from "../../store";

class EmployeeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      firstName: "",
      lastName: "",
      action: "Add",
      changed: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    
    let value = target.value;
    if (target.type === "checkbox")
    {
      value = target.checked;
    }
    else if (target.type ==="number")
    {
      value = parseInt(target.value, 0);
    }

    const name = target.name;
    this.setState({ changed: true });
    this.setState({
      [name]: value
    });
  }

  handleClose() {
    if (this.state.changed === true) {
      const isConfirmed = window.confirm(
        "Are you sure you want to exit without saving?"
      );
      if (isConfirmed === false) {
        return;
      }
    }
 //   this.clearInputStates();
    this.props.history.push("/");
  }

  handleSubmit() {
    if (this.state.changed === true) {
      // save to database
      if (this.state.action === "Edit") {
        let emp = employees.find(e => e.id === this.state.id);
        emp.firstName = this.state.firstName;
        emp.lastName = this.state.lastName;
      } else {
        var formEmployee = {
          id: this.state.id,
          firstName: this.state.firstName,
          lastName: this.state.lastName
        };
        employees.push(formEmployee);
      }

      this.props.history.push("/");
      this.setState({ changed: false });
      
    }

    // show toast for success or failure
  }

  componentDidMount() {
    let employeeId = parseInt(this.props.match.params.id, 0);
    let emp = employees.find(e => e.id === employeeId);
//alert(JSON.stringify(employees), JSON.stringify(emp));
    // if employee exit the edit it otherwise add it
    if (emp) {
      this.setState({
        id: emp.id,
        firstName: emp.firstName,
        lastName: emp.lastName,
        action: "Edit",
        changed: false
      });
    }
  }

  render() {
    return (
      <div>
        <form key={this.id} onSubmit={this.handleSubmit}>
          <div
            style={{
              paddingTop: 8,
              paddingBottom: 8,
              paddingLeft: 24,
              paddingRight: 24
            }}
          >
            <Typography variant="h6">{this.state.action} Employee</Typography>
          </div>
          <div
            style={{
              paddingTop: 8,
              paddingBottom: 8,
              paddingLeft: 24,
              paddingRight: 24
            }}
          >
            <TextField
              id="id"
              name="id"
              value={this.state.id}
              onChange={this.handleInputChange}
              required
              autoFocus
              margin="none"
              label="id"
              type="number"
              style={{ marginBottom: 8 }}
              fullWidth
            />

            <TextField
              id="firstName"
              name="firstName"
              value={this.state.firstName}
              onChange={this.handleInputChange}
              margin="normal"
              label="First name"
              type="text"
              fullWidth
            />

            <TextField
              id="lastName"
              name="lastName"
              value={this.state.lastName}
              onChange={this.handleInputChange}
              margin="normal"
              label="Last name"
              type="text"
              fullWidth
            />
          </div>
          <div
            style={{
              paddingTop: 8,
              paddingBottom: 8,
              paddingLeft: 16,
              paddingRight: 16
            }}
          >
            <Button onClick={this.handleClose}>Close</Button>
            <Button type="submit" color="primary">
              Save
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default EmployeeForm;
