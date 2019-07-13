import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Counters from "./components/counters";

class App extends Component {
  state = {};
  render() {
    return (
      <div>
        <Navbar />
        <main className="container">
          <Counters />
        </main>
      </div>
    );
  }
}

export default App;
