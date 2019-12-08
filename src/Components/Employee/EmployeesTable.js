import React, { Component } from "react";
import { RouteComponentProps } from "react-router-dom";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TablePagination from "@material-ui/core/TablePagination";
import { Link } from "react-router-dom";

class EmployeesTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 1,
      rowsPerPage: 5
    };
    this.handleChangePage = this.handleChangePage.bind(this);
    this.handleChangeRowsPerPage = this.handleChangeRowsPerPage.bind(this);
    this.handleClickRow = this.handleClickRow.bind(this);
  }

  handleChangePage = (event, newPage) => {
    this.setState({ page: newPage });
  };
  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: parseInt(event.target.value, 5) });
    this.setState({ page: 1 });
  };
  handleClickRow = (event, row) => {
    console.log(row.id);
    this.setState({ selectedRowId: row.id });
    console.log(this.props.location);
    this.props.history.push("/employee/edit/" + row.id);
  };

  render() {
    return (
      <div style={{ width: "100%", overflowX: "auto" }}>
        <div style={{ overflowX: "auto" }}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell align="right">Fistname</TableCell>
                <TableCell align="right">Lastname</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.props.rows.map(row => (
                <TableRow
                  hover
                  key={row.id}
                  onClick={event => this.handleClickRow(event, row)}
                >
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell align="right">{row.firstName}</TableCell>
                  <TableCell align="right">{row.lastName}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={this.props.totalRowsCount}
          rowsPerPage={this.state.rowsPerPage}
          page={this.state.page}
          onChangePage={this.handleChangePage}
          onChangeRowsPerPage={this.handleChangeRowsPerPage}
        />
      </div>
    );
  }
}

export default EmployeesTable;
