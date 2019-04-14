import React, { Component } from 'react'


export class Time extends Component {
  render() {
      const options = [
          0, 5, 10, 15, 20, 25, 30, 45, 60
      ]
      const dropOptions = options.map((x) => {
          return(<option key={x}>{x}</option>)
        });

    return (
      <div>
          <label>Time in minutes</label>
          <select>{dropOptions}</select>
      </div>
    )
  }
}

export default Time
