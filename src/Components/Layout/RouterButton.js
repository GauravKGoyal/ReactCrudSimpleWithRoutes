import React, { Component } from "react";
import { MemoryRouter as Router } from "react-router";
import { Link as RouterLink } from "react-router-dom";
import Button from "@material-ui/core/Button";

// The use of React.forwardRef will no longer be required for react-router-dom v6.
// See https://github.com/ReactTraining/react-router/issues/6056
const Link1 = React.forwardRef((props, ref) => (
  <RouterLink innerRef={ref} {...props} />
));

class RouterButton extends Component {
  render() {
    return (
      <Router>
        <Button color={this.props.color} component={Link1} to={this.props.to}>
          {this.props.text}
        </Button>
      </Router>
    );
  }
}

export default RouterButton;
