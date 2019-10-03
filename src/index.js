import React, { Component } from "react";
import ReactDOM from "react-dom";
import Square from "./square";
import colorBank from "./colors";
import Buttons from "./Buttons";

import "./styles.css";

export default class App extends Component {
  state = {
    colors: colorBank.colors,
    background: ""
  };

  handleButtonClick = color => {
    console.log(color);
    this.setState({
      background: color
    });
  };

  render() {
    const { colors, background } = this.state;
    return (
      <div className="App">
        <h1>React Arena</h1>
        <h2>Color my Square</h2>
        <p>Click a button to color the square!</p>
        <Buttons colors={colors} buttonClick={this.handleButtonClick} />
        <Square background={background} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
