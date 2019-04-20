import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import App from './App'
import { BrowserRouter as Router, Route} from 'react-router-dom'

var reactImg = require( './react2.png');
var mongoImg = require('./mongo.png');
var expressImg = require( './express.png');
var nodeImg = require('./node.png')
export class Home extends Component {
    render(){
        return(
            <Router>
            <Route exact path="/" render={props => (
                <div style={{backgroundColor:"#17CDDA"}}>
                <React.Fragment>
                    <header style={headerStyle}>
                        <h3 style={{fontSize: "30px"}}>Welcome to my first react app</h3>
                        <p style={{textAlign: 'center'}}>This is my first attempt at building any type of web application from scratch.  This app is created using a combination
                            of React.js, Express, Node.js and MongoDB. You can find the link to the repo below</p>
                      </header>
                    <div style={{textAlign: 'center', fontSize:"20px", paddingTop: "20px"}}>
                        <Link style={linkstyle} to="/calc">Continue</Link>
                        <a style={linkstyle} href="https://github.com/MacTopp/CalorieCounter_React.git">GitHub</a>
                     </div>
                     <body style={bodyStyle}>
                         <img src={mongoImg} width="400" height="400"/>
                         <img src={reactImg} width="400" height="400"/>
                         <img src={expressImg} width="400" height="400"/>
                         <img src={nodeImg} width="400" height="400"/>
                     </body>
                </React.Fragment>
                </div>
              )}/>
              <Route path="/calc" component={App}/>
             </Router>
            
        )

        
    }

}

const linkstyle ={
    padding: "20px"
}

const headerStyle = {
    backgroundColor: "#4168A4",
    textAlign: "Center",
    color: "white",
    paddingBottom: "20px"
}

const bodyStyle = {
    textAlign: "Center",
    paddingTop: "20px"

}
export default Home;