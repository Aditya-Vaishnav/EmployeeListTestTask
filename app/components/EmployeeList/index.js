/**
*
* EmployeeList
*
*/

import React from 'react';
import Employee from '../Employee'
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';


import Header from 'components/Header'
import EmployeeRow from 'components/EmployeeRow'

import styles from './styles.css';


class EmployeeList extends React.Component { // eslint-disable-line react/prefer-stateless-function  

	fetchEmployees() {
  	const {employees, onDelete} = this.props
  	console.log("employees", employees)
	  const employeeList = employees.map((employeeData, index) => {
	  	return (
	  		<EmployeeRow key={index} onDelete={onDelete} employee={employeeData} />
	  	)
		});
		return employeeList
	}

  render() {
    return (
      <div className={styles.employeeList}>
      	<Table selectable={false}>
 		      <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
			      <TableRow>
			        <TableHeaderColumn>ID</TableHeaderColumn>
			        <TableHeaderColumn>Name</TableHeaderColumn>
			        <TableHeaderColumn>Company</TableHeaderColumn>
			        <TableHeaderColumn>Email</TableHeaderColumn>
			        <TableHeaderColumn>Phone</TableHeaderColumn>
			        <TableHeaderColumn>Action</TableHeaderColumn>
			      </TableRow>
    			</TableHeader>
			    <TableBody displayRowCheckbox={false}>
	      		{this.fetchEmployees()}
			    </TableBody>
			  </Table>
      </div>
    );
  }
}

export default EmployeeList;
