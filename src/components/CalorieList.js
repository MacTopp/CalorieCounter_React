import React, { Component } from 'react'
import CalorieItem from './CalorieItem';

export class CalorieList extends Component {
  render() {
    return this.props.amount.map((e) => (
      <CalorieItem e={e}/>
    ));
  }
}

export default CalorieList;
