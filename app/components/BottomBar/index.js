/**
*
* BottomBar
*
*/

import React from 'react';

import styles from './styles.css';
import RaisedButton from 'material-ui/RaisedButton'
import Paper from 'material-ui/Paper'

class BottomBar extends React.Component { // eslint-disable-line react/prefer-stateless-function
  
	getButtons() {
		const {listSize, selectPage} = this.props;
		const buttons = parseInt(listSize/10)+ 1
		let buttonsList = [];

		for( let i=0; i<buttons; i++) {
		 	buttonsList.push(<RaisedButton key={i} className={styles.navigationButton} label={i+1} onTouchTap={()=> selectPage(i)}/>)
		}

		return buttonsList;
	}
	

  render() {
    return (
      <Paper className={styles.bottomBar}>
  			{this.getButtons()}
      </Paper>
    );
  }
}

export default BottomBar;
