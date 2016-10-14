/**
*
* Header
*
*/

import React from 'react';
import {TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

import styles from './styles.css';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
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
    );
  }
}

export default Header;
