import React, { Component } from 'react'

export class CalorieItem extends Component {
  render() {
      const amount = this.props.e;
    return (
      <div>
        <p>{amount}</p>
      </div>
    )
  }
}

export default CalorieItem
