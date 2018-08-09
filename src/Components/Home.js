import React, { Component } from 'react';
import Counter from './Counter';

class Home extends Component {
  render() {
    return (
      <div className="App">
        Welcome to home
        <Counter/>
      </div>
    );
  }
}

export default Home;
