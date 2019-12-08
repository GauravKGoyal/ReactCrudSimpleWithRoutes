import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Typography } from "@material-ui/core";

class EmployeeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      firstName: "",
      lastName: "",
      changed: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
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
    this.clearInputStates();
  }

  handleSubmit() {
    if (this.state.changed === true) {
      var contents = JSON.stringify({
        id: this.state.id,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        changed: this.state.changed
      });
      alert(contents);
      this.props.saveData(contents);
    }
    // save to database

    // show toast for success or failure
  }

  componentDidMount() {
    console.log("sdf", this.props);
    this.setState({
      id: this.props.data.id,
      firstName: this.props.data.firstName,
      lastName: this.props.data.lastName,
      changed: false
    });
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
            <Typography variant="h6">{this.props.action} Employee</Typography>
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
            <Button onClick={this.handleClose}>Cancel</Button>
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
