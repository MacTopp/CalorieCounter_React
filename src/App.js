import React, { Component } from 'react';
import Calories from './components/Calories'
import Excersize from './components/Excersize'
import Post from './components/Posts'
import axios from 'axios';
import './App.css';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import {Link} from 'react-router-dom'

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

      case "Biked":
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

addPost = (e) => {
  console.log("here")
  const con = this.arrSum(this.state.amount);
  const burn = con - this.state.left;
  console.log(con, burn)
  axios.post(`http://localhost:5000/api/post`, { consumed: con, burned: burn })
      .then(res => {
  
      })
  window.location.reload();
    }

  render() {
    return (
      <Router>
      <div className="App" style={{backgroundColor: "#F1FCFF"}}>
     
        <div className="Title">
          <header >
            <h1 style={titleStyle}>Calorie Counting!</h1>
          </header>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', paddingBottom: '15px'}}>
        
          <div className="Calories" style={cStyle}>
            <Calories addCalories={this.addCalories}/>
            <p>Total Calories: {this.arrSum(this.state.amount)}</p>
          </div>
          <Grid item xs={3}>
            <div className="Excersize" style={eStyle}>
              <Excersize addExcersize={this.addExcersize}/>
              
            </div>
          </Grid>
          <div className="Remaining" style={eStyle}>
            <p>Calories left to burn: {this.state.left}</p>
          </div>
      
        </div>

        <Divider variant="middle" />
        <Grid container spacing={24}>
        <Grid item xs={12}>
          <Post/>
        </Grid>
        </Grid>
        <button type="submit" onClick={this.addPost}>Submit data</button>
        
      </div>
      </Router>
    );
  }
}

const titleStyle = {
  textAlign: 'center',
  backgroundColor: '#99C5DF',
}

const cStyle = {
  textAlign: 'left'
}

const eStyle = {
  paddingLeft: '150px'
}
export default App;
