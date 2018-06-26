import React, { Component } from 'react';
import './App.css';
import Index from "./components/Index"
import Question from "./components/Question"
import Checkbox from "./components/Checkbox"
import Application from "./components/Application"
import Check1 from "./components/Check1"
import NormalMethod from "./components/NormalMethod";

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
