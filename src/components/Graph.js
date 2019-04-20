import React, { Component } from 'react'
import CanvasJSReact from '../canvasjs.react'
//var CanvasJSReact = require('../canvasjs.react');
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export class Graph extends Component {
  render() {
      // data points will need to add parsing by days when more data is collected
    const posts = this.props.posts;
    var data = [];
    var val = 1;
    posts.forEach(function(posts) {
        let total = posts.consumed - posts.burned;
        data.push({x: val++, y: total})
    });
    
    const options = {
        animationEnabled: true,
        exportEnabled: true,
        theme: "light2", // "light1", "dark1", "dark2"
        title:{
            text: "Net Calories Per Day"
        },
        axisY: {
            title: "Net Calories",
            includeZero: false,

        },
        axisX: {
            title: "Data point",
         
        },
        data: [{
            type: "line",
            toolTipContent: "Week {x}: {y}%",
            dataPoints: data, 
            
        }]
    }
    return (
		<div>
			<CanvasJSChart options = {options}
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>

    )
  }
}

export default Graph
