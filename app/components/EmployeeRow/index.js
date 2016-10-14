/**
*
* EmployeeRow
*
*/

import React from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import Delete from 'material-ui/svg-icons/action/delete-forever.js'
import IconButton from 'material-ui/IconButton';

import styles from './styles.css';

class EmployeeRow extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
  	const {employee, onDelete} = this.props
    return (
	    <TableRow>
		    <TableRowColumn>{employee._id}</TableRowColumn>
		    <TableRowColumn>{employee.name}</TableRowColumn>
		    <TableRowColumn>{employee.company}</TableRowColumn>
		    <TableRowColumn>{employee.email}</TableRowColumn>
		    <TableRowColumn>{employee.phone}</TableRowColumn>
		    <TableRowColumn>
		    	<IconButton tooltip="Delete"
		        					tooltipPosition="top-left"
		        					style={{width:21, height:21}} 
		        					iconStyle={{width: 20, height: 20, marginTop: -10}}
		        					onTouchTap={this.deleteItem}>
		    		<Delete color="#b71c1c" onTouchTap={(e)=> {onDelete(employee._id)}}/>
		  		</IconButton>
		    </TableRowColumn>
		  </TableRow> 
    );
  }
}

export default EmployeeRow;
