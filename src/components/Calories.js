import React, { Component } from 'react'

export class calculator extends Component {
  state = {
    amount: ''
  }

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.amount);
    this.props.addCalories(this.state.amount);
    this.setState({amount: ''});
  }

  onChange = (e) => this.setState({amount : e.target.value});
  
  render() {
    return (

        <form onSubmit={this.onSubmit} style={{display: 'flex'}}>
            <label>
            Amount:
              <input type="text"
              name="title"
              placeholder="Calorie amount"
              style={{flex: '10'}}
              value={this.state.amount}
              onChange={this.onChange}>
            </input>
            </label>
            <input type="submit" value="Submit " />
        </form>

    )
  }
}

export default calculator
