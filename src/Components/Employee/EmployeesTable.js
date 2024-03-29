import React, { Component } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TablePagination from "@material-ui/core/TablePagination";
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";
import { employees as rows } from "../../store";


class EmployeesTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 0,
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
    this.setState({ rowsPerPage: parseInt(event.target.value, 10) });
    this.setState({ page: 0 });
  };
  handleClickRow = (event, row) => {
    this.setState({ selectedRowId: row.id });
    this.props.history.push("/employees/edit/" + row.id);
  };
  handleClickAdd = event => {
    this.props.history.push("/employees/add");
  };

  render() {
    return (
    
        <div>
          <Button
            startIcon={<AddIcon />}
            color="primary"
            onClick={this.handleClickAdd}
          >
            Add
          </Button>
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
                {rows
                  .slice(
                    this.state.page * this.state.rowsPerPage,
                    this.state.page * this.state.rowsPerPage +
                      this.state.rowsPerPage
                  )
                  .map(row => (
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
            count={rows.length}
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
