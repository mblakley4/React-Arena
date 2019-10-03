import React from "react";

export default class Square extends React.Component {
  static defaultProps = {
    background: "red"
  };
  render() {
    return (
      <div className="square" style={{ background: this.props.background }} />
    );
  }
}
