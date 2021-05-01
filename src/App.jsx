import { render } from "@testing-library/react";
import React, { Component } from "react";
import "./App.css";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { ClearButton } from "./components/ClearButton";
import { evaluate } from "mathjs";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
    };
  }
  addToInput = (val) => {
    this.setState({ input: this.state.input + val });
  };
  handelEqual = () => {
    this.setState({ input: evaluate(this.state.input) });
  };
  render() {
    return (
      <div className="app">
        <div className="calc-wrapper">
          <Input input={this.state.input}> </Input>
          <div className="row">
            <Button handelClick={this.addToInput}>7</Button>
            <Button handelClick={this.addToInput}>8</Button>
            <Button handelClick={this.addToInput}>9</Button>
            <Button handelClick={this.addToInput}>/</Button>
          </div>
          <div className="row">
            <Button handelClick={this.addToInput}>4</Button>
            <Button handelClick={this.addToInput}>5</Button>
            <Button handelClick={this.addToInput}>6</Button>
            <Button handelClick={this.addToInput}>*</Button>
          </div>
          <div className="row">
            <Button handelClick={this.addToInput}>1</Button>
            <Button handelClick={this.addToInput}>2</Button>
            <Button handelClick={this.addToInput}>3</Button>
            <Button handelClick={this.addToInput}>+</Button>
          </div>
          <div className="row">
            <Button handelClick={this.addToInput}>.</Button>
            <Button handelClick={this.addToInput}>0</Button>
            <Button handelClick={() => this.handelEqual()}>=</Button>
            <Button handelClick={this.addToInput}>-</Button>
          </div>
          <div className="row">
            <ClearButton handleClear={() => this.setState({ input: "" })}>
              Clear
            </ClearButton>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
