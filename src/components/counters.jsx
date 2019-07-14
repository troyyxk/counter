import React, { Component } from "react";
import Counter from "./counter";

class Components extends Component {
  render() {
    return (
      <div>
        <button
          onClick={this.props.onReset}
          className="btn btn-primary btn-sm n-2"
        >
          Reset
        </button>
        {this.props.counters.map(counter => (
          <Counter
            key={counter.id}
            // id={counter.id}
            onDelete={this.props.onDelete}
            // onDelete={() => this.props.onDelete(counter.id)}  // only need to add it once
            // onClick={() => this.props.onDelete(this.props.counter.id)}
            onIncrement={this.props.onIncrement}
            onDecrement={this.props.onDecrement}
            // value={counter.value}
            // isSelected={true}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Components;
