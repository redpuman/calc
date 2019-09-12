import React from "react";
import Display from "./Display";
import Button from "./Button";
import style from "./Calculator.less";

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current: '0',
            operand1: null,
            operand2: null,
            operation: null
        };
    }

    calc(symbol) {
        let isOperation = this.state.operation;

        if (symbol === '=') {
            if (this.state.operation) {
                let result = this.operate();

                if (result % 1 !== 0) result = result.toFixed(2);

                this.setState({
                    current: result,
                    operand1: result,
                    operand2: null,
                    operation: null,
                });
            }
        } else if (symbol === '⇤') {
            let current = this.state.current,
                newValue = current.toString().substr(0, current.length - 1);

            newValue = newValue.trim() === '' ? 0 : newValue;

            this.setState({ current: newValue });
            this.setOperand(isOperation, newValue);

        } else if (!(/[0-9.]/.test(symbol))) {
            if (this.state.operation !== null) {
                this.calc('=');
            }

            this.setState({ operation: symbol });
        } else {
            let operand = !isOperation ? this.state.operand1 : this.state.operand2,
                newValue = (operand === null ? '0' : operand) + symbol;

            if (newValue % 1 === 0 && newValue !== '0.' && newValue[0] === '0') newValue = newValue.substr(1);

            if (/^[0-9]+\.?[0-9]*$/.test(newValue)) {
                this.setState({ current: newValue });
                this.setOperand(isOperation, newValue);
            }
        }
    }

    setOperand(isOperation, newValue) {
        if (!isOperation) {
            this.setState({operand1: newValue});
        } else {
            this.setState({operand2: newValue});
        }
    }

    operate() {
        return eval(`${this.state.operand1} ${this.state.operation} ${this.state.operand2}`);
    }

    render() {
        let buttons = ['7', '8', '9', '+', '4', '5', '6', '-', '1', '2', '3', '*', '0', '.', '⇤', '/', '='];

        return (
            <div className={style.calculator}>
                <Display output={this.state.current}/>

                <div className={style.control}>
                    {buttons.map(symbol => {
                        return <Button caption={symbol} action={() => this.calc(symbol)} key={symbol}/>
                    })}
                </div>
            </div>
        );
    }
}

export default Calculator;