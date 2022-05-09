import React, { Component } from "react";
import "./ValidationSample.css";

class ValidationSample extends Component {
  state = {
    password: "",
    clicked: false,
    validated: false,
  };

  input = React.createRef();

  handleChange = (e) => {
    this.setState({
      password: e.target.value,
    });
    this.input.current.focus();
  };

  handleButtonClick = () => {
    this.setState({
      clicked: true,
      validated: this.state.password === "0000",
    });
    this.input.current.focus();
  };

  handleKeyPress = (e) => {
    if (e.key === "Enter") this.handleButtonClick();
  };

  handleFocus = () => {};

  render() {
    return (
      <div>
        <input
          type="password"
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
          ref={this.input}
          value={this.state.password}
          className={
            this.state.clicked
              ? this.state.validated
                ? "success"
                : "failure"
              : ""
          }
        ></input>
        <button onClick={this.handleButtonClick}>검증하기</button>
      </div>
    );
  }
}

export default ValidationSample;
