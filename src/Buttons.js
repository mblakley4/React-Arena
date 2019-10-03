import React from "react";

export default class Buttons extends React.Component {
  render() {
    return (
      <div className="button-container">
        {this.props.colors.map((color, i) => (
          <button
            key={i}
            background={color.color}
            onClick={() => this.props.buttonClick(this.props.colors[i].color)}
          >
            {color.name}
          </button>
        ))}
      </div>
    );
  }
}
