import React, { Component } from 'react';
import './App.css';
import Index from "./components/Index"
import Question from "./components/Question"
import Checkbox from "./components/Checkbox"
import Application from "./components/Application"
// import Check from "./components/Check"
import NormalMethod from "./components/NormalMethod";
import Check from "./components/Check";
import SendData from "./components/SendData"

class App extends Component {
    render() {
        return (
            <div>
                <div className="top-header">
                    <div className="top-daily">
                        <Index/>
                    </div>
                    <div className="top-weekly">
                        <Question/>
                    </div>
                </div>

            </div>
        );
    }
}

export default App;
