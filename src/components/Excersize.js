import React, { Component } from 'react'

export class Excersize extends Component {
    state = {
        type: '',
        length: 0,
        ran: false,
        bike: false,
        up: false,
        low: false
  
    }
    
    onChange = (e) => {
      if (e.target.type === "radio"){
        if (this.state.ran === true){
          this.setState({ran: false});
        }
        if (this.state.bike === true){
          this.setState({bike: false});
        }
        if (this.state.up === true){
          this.setState({up: false});
        }
        if (this.state.low === true){
          this.setState({low: false});
        }
        switch (e.target.value){
          case "Ran":
            const temp = !(this.state.ran);
            this.setState({ran: temp});
            break;
          case "Biked":
            this.setState({bike: true});
            break;
          case "Upper":
            this.setState({up: true});
            break;
          case "Lower":
            this.setState({low: true});
            break;
          default:
            break;
        };
    
        this.setState({type: e.target.value});
        console.log(this.state);
      }
      else{
        this.setState({length : e.target.value})
      }
    }

    onSubmit = (e) => {
      e.preventDefault();
      this.props.addExcersize(this.state);
      this.setState({type: '', 
      length: 0,
      ran: false,
      bike: false,
      up: false,
      low: false,
      });

    }
  render() {

    const options = [
        0, 5, 10, 15, 20, 25, 30, 45, 60
    ]
    const dropOptions = options.map((x) => {
        return(<option key={x}>{x}</option>)
      });
    
    return (
      
      <form onSubmit={this.onSubmit} style={{display : 'flex'}}>
        <div>
            <label className="Type">
            Ran
            <input type="radio" value="Ran" onChange={this.onChange} checked={this.state.ran}></input>
            <div></div>
            Biked
            <input type="radio" value="Biked" onChange={this.onChange} checked={this.state.bike}></input>
            <div></div>
            Upper body
            <input type="radio" value="Upper" onChange={this.onChange} checked={this.state.up}></input>
            <div></div>
            Lower body
            <input type="radio" value="Lower" onChange={this.onChange} checked={this.state.low}></input>
            <div></div>
            <div>
          <label>Time in minutes</label>
          <select value={this.state.length} onChange={this.onChange}>{dropOptions}</select>
          </div>
        </label>
        </div>
        <input type='submit' value='Submit' className='btn' style={buttonStyle}></input>
      </form>
    )
  }
}
const buttonStyle = {
  
}
export default Excersize