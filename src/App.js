import React, { Component } from 'react';
import Calories from './components/Calories'
import Excersize from './components/Excersize'


import './App.css';

class App extends Component {
  state = {
    amount: [ 
    ],
    left: 0,
  }

  arrSum = function(arr){
    return arr.reduce(function(a,b){
      return a + b
    }, 0);
  }

  addCalories = (amount) => {
    const newAmount = parseInt(amount);
    const addLeft = this.state.left + newAmount;
    this.setState({amount : [...this.state.amount, newAmount]});
    this.setState({left : addLeft});
    console.log(this.state.amount)
  }

  addExcersize = (values) => {
    console.log(values);
    var burned = 0;
    switch(values.type){
      case "Ran":
        burned = values.length * 10; // average of 10 calories burned / min
        break;

      case "Bike":
        burned = values.length * 5;
        break;
      
      case "Upper":
        burned = values.length * 2;
        break;
      
      case "Lower":
        burned = values.length *4;
        break;

      default:
        break;
      
    }
  var temp = this.state.left - burned;
  this.setState({left: temp});
  }

  render() {
    return (
      <div className="App">
        <div className="Title">
        <header>
          <h1 style={titleStyle}>Working with React</h1>
        </header>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row'}}>
       
          <div className="Calories" style={cStyle}>
            <Calories addCalories={this.addCalories}/>
            <p>Total Calories: {this.arrSum(this.state.amount)}</p>
          </div>
          <div className="Excersize" style={eStyle}>
            <Excersize addExcersize={this.addExcersize}/>
            
          </div>
          <div className="Remaining" style={eStyle}>
          <p>Calories left to burn: {this.state.left}</p>
          </div>
        </div>
      </div>
    );
  }
}

const titleStyle = {
  textAlign: 'center',
  backgroundColor: 'grey',
}

const cStyle = {
  textAlign: 'left'
}

const eStyle = {
  paddingLeft: '150px'
}
export default App;
