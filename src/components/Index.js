import logo from '../logo.png';
import React, { Component } from 'react';


export default class Index extends Component {
    render(){
        return(
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to AWS Developer Certified Associate Exam</h1>
                </header>
            </div>
        )

    }
}

