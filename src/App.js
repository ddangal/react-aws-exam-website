import React, { Component } from 'react';
import './App.css';
import Index from "./components/Index"
import Question from "./components/Question"

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
