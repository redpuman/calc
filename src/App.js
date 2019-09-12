import React, { Component } from "react";
import "./App.less";
import Calculator from "./components/Calculator";

class App extends Component {
    render() {
        return (
            <div className="wrapper">
                <Calculator />
            </div>
        );
    }
}

export default App;