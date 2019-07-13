import React, { Component } from "react";
import Counter from "./counter";

class Components extends Component {
  state = {
    counters: [
      { id: 1, value: 5 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
      { id: 5, value: 0 }
    ]
  };

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDelete = counterId => {
    // console.log("Event Handler Called");
    // console.log(counterId);

    // console.log("Event Handler Called", counterId);
    const counters = this.state.counters.filter(
      counter => counter.id !== counterId
    );
    this.setState({ counters: counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters: counters });
  };

  render() {
    return (
      <div>
        <button
          onClick={this.handleReset}
          className="btn btn-primary btn-sm n-2"
        >
          Reset
        </button>
        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            // id={counter.id}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
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
