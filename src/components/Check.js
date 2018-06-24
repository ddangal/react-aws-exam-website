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
                    <div className="input-group">
                        <input type="checkbox" value="1" onChange={this.onChange.bind(this)} />
                        <label>Answer A</label>
                    </div>
                    <div className="input-group">
                        <input type="checkbox" value="2" onChange={this.onChange.bind(this)} />
                        <label>Answer B</label>
                    </div>
                    <div className="input-group">
                        <input type="checkbox" value="3" onChange={this.onChange.bind(this)} />
                        <label>Answer C</label>
                    </div>
                    <br/>
                    <input onClick= { () =>

                        this.state.options.map(number =>
                        <p key={number}>item: {number}</p>
                    )} type="button" name="click"  value="show" id=""/>
                </form>

                {/*<div className="selected-items">*/}
                    {/*{this.state.options.map(number =>*/}
                        {/*<p key={number}>item: {number}</p>*/}
                    {/*)}*/}
                {/*</div>*/}

            </div>
        )
    }
}

