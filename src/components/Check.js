import React, { Component } from 'react';



export default class Check extends Component {
    constructor() {
        super();
        this.state = {
            options: []

        };
    }

    onChange(e) {
        // current array of options
        const options = this.state.options
        let index

        // check if the check box is checked or unchecked
        if (e.target.checked) {
            // add the numerical value of the checkbox to options array
            options.push(+e.target.value)
        } else {
            // or remove the value from the unchecked checkbox from the array
            index = options.indexOf(+e.target.value)
            options.splice(index, 1)
        }

        // update the state with the new array of options
        this.setState({ options: options })
    }



    render(){

        return(
            <div>
                <form>
                    <h1>Question 1: what is ....</h1>
                    <div className="input-group">
                        A <input type="checkbox" value="11" onChange={this.onChange.bind(this)} />
                        <label>Answer A</label>
                    </div>
                    <div className="input-group">
                        B <input type="checkbox" value="12" onChange={this.onChange.bind(this)} />
                        <label>Answer B</label>
                    </div>
                    <div className="input-group">
                        C <input type="checkbox" value="13" onChange={this.onChange.bind(this)} />
                        <label>Answer C</label>
                    </div>
                    <button onClick={
                        console.log(this.state.options)
                    }> click</button>


                    <br/>
                    <h1>Question 2: what is ....</h1>
                    <div className="input-group">
                        A <input type="checkbox" value="21" onChange={this.onChange.bind(this)} />
                        <label>Answer A</label>
                    </div>
                    <div className="input-group">
                        B <input type="checkbox" value="22" onChange={this.onChange.bind(this)} />
                        <label>Answer B</label>
                    </div>
                    <div className="input-group">
                        C <input type="checkbox" value="23" onChange={this.onChange.bind(this)} />
                        <label>Answer C</label>
                    </div>


                </form>


            </div>
        )
    }
}

