// import React, { Component } from "react";

// class Counter extends Component {
//   // state is a special property in react component
//   // an object that include any object that this component needs
//   state = {
//     count: 0,
//     tags: ["tag1", "tag2", "tag3"]
//     // imageUrl: "https://picsum.photos/200"
//   };

//   render() {
//     return (
//       // will have an outer layer of div with id == root
//       // can aboid this problem with React.Fragment
//       // {/* Use className to attach classes */}
//       <div>
//         {/* can add any valid javascript expression in {} */}
//         {/* <img src={this.state.imageUrl} alt="" /> */}
//         <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
//         <button className="btn btn-secondary btn-sm">Increment</button>
//         <ul>
//           {this.state.tags.map(tag => (
//             <li key={tag}> {tag} </li key={tag}>
//           ))}
//         </ul>
//       </div>

//       // jsx not template but syntax to genreate react elements
//     );

//     // can use style to define style, but most ofenly, we use class/className
//     // style is in css format
//   }

//   getBadgeClasses() {
//     let classes = "badge m-2 badge-";
//     classes += this.state.count === 0 ? "warning" : "primary";
//     return classes;
//   }

//   formatCount() {
//     const { count } = this.state;
//     return count === 0 ? "Zero" : count;
//     // return count === 0 ? <h1>Zero</h1> : count;
//   }
// }

// export default Counter;

import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0
  };

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
