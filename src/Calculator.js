import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

class Calculator extends Component {
    constructor() {
        super()
        this.state = {
            display: "",
            num1: "",
            num2: ""
        }
    }
    setNum = (e, num) => {
        console.log(e)
        this.setState({ [num]: parseInt(e.target.value)});
      }

    handleClick = () => {
        this.setState((state) => ({
            display: state.num1 + state.num2
        }))
    }
    render() {
        return(
            <div className="container">
            <h1>Add with React!</h1>

            <div className="add">
                <input 
                type="text" 
                onChange={(e)=> this.setNum(e, "num1")}
                placeholder="Enter your first number"
                value={this.state.num1}
                />
                <span>+</span>
                <input 
                type="text" 
                onChange={(e)=> this.setNum(e, "num2")}
                placeholder="Enter your second number"
                value={this.state.num2}
                />
                <button onClick={this.handleClick}>=</button>
                <h3>{this.state.display}</h3>
            </div>
            </div>
        );
    }
}
export default Calculator;