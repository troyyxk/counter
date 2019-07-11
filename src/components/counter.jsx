import React, { Component } from "react";

class Counter extends Component {
  // state is a special property in react component
  // an object that include any object that this component needs
  state = {
    count: 1
  };

  render() {
    return (
      // will have an outer layer of div with id == root
      // can aboid this problem with React.Fragment
      <div>
        {/* can add any valid javascript expression in {} */}
        <span>{this.formatCount()}</span>
        <button>Increment</button>
      </div>
    );
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? <h1>Zero</h1> : count;
  }
}

export default Counter;
