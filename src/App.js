import React, { Component } from 'react';
import './App.css';
import Index from "./components/Index"
import Question from "./components/Question"
import Question1 from "./components/Question1"
import View_daily from "./components/View_daily"
import View_weekly from "./components/View_weekly"
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
