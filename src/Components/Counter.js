import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      number: 0
    }
  }

  onAddNumber = () => {
    this.setState({ number: this.state.number + 1 })
  }

  onSubNumber = () => {
    this.setState({ number: this.state.number - 1 })
  }

  render() {
    return (
      <div>
        <button onClick={this.onAddNumber}>+</button>
        <span>{this.state.number}</span>
        <button onClick={this.onSubNumber}>-</button>
      </div>
    )
  }
}

export default Counter;
