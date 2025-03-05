import React, { Component } from 'react'

export default class Counter extends Component {
  

    constructor() {
        super();
        this.state = {
            count: 0,
        }

    }

    incrementCount = ()=>{
      this.setState({
        count: this.state.count+1,
      })
    }
    DecrementCount = ()=>{
      this.setState({
        count: this.state.count-1,
      })
    }
    ReseteCount = ()=>{
      this.setState({
        count:0,
      })
    };

    render() {
    return (
      <div style={{border:"5px solid blue", height:"200px", width:"200px", textAlign:"center", margin:"25px auto" }}>
      <h1>Counter App</h1>
      <p>Count: {this.state.count}</p>
      <button onClick={this.incrementCount}>Increment</button>
      <button onClick={this.DecrementCount}>Decrement</button>
      <button onClick={this.ReseteCount}>Resete</button>
      </div>
    );
  }
}
