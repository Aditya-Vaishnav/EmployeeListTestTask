/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

import EmployeeList from 'components/EmployeeList'
import BottomBar from 'components/BottomBar'
import fetchAllEmployees from './constants'
// Table data as a list of array.

export default class HomePage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  constructor() {
    super();
    this.onDelete = this.onDelete.bind(this);
    this.selectPage = this.selectPage.bind(this);
    this.getEmployeesToDisplay = this.getEmployeesToDisplay.bind(this);
    this.state = {
      employees: fetchAllEmployees(),
      pageIndex: 0
    };
  }

  onDelete(employeeId) {
    const {employees} = this.state
    const newEmployees = employees.filter((employee) => {
      return employee._id !== employeeId
    })
    this.setState({
      employees: newEmployees
    });
  }

  selectPage(pageIndex) {
    this.setState({
      pageIndex: pageIndex
    });
  }

  getEmployeesToDisplay() {
    const {employees, pageIndex} = this.state;
    const newEmployees = employees.filter((employee, index) => {
      return index >= pageIndex*10 && index < pageIndex*10 + 10
    }) 
    return newEmployees
  }

  render() {
    const self = this;
    return (
      <h1>
        <EmployeeList pageIndex={self.state.pageIndex} employees={this.getEmployeesToDisplay()} onDelete={self.onDelete}/>
        <BottomBar listSize={self.state.employees.length} selectPage={self.selectPage} />
      </h1>
    );
  }
}
