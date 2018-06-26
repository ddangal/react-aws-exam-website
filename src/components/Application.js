import React, { Component } from 'react';
import Checkbox from './Checkbox';

const items = [
    'One',
    'Two',
    'Three',
    'four',
];
const answer = [
    "answer 1 is this",
    "answer 2 is this",
    "answer 3 is this",
    "answer 4 is this",
]
const question1 = "What is question number one?"


class Application extends Component {
    componentWillMount = () => {
        this.selectedCheckboxes = new Set();
    }

    toggleCheckbox = label => {
        if (this.selectedCheckboxes.has(label)) {
            this.selectedCheckboxes.delete(label);
        } else {
            this.selectedCheckboxes.add(label);
        }
    }

    handleFormSubmit = formSubmitEvent => {
        formSubmitEvent.preventDefault();
        var a = "";
        for (const checkbox of this.selectedCheckboxes) {
            a =a+checkbox;
            console.log(checkbox, 'is selected.');
        }
        alert(a);

    }

    createCheckbox = label => (
        <Checkbox
            label={label}
            handleCheckboxChange={this.toggleCheckbox}
            key={label}
        />
    )

    createCheckboxes = () => (
        items.map(this.createCheckbox)
    )

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">

                        <form onSubmit={this.handleFormSubmit}>

                            {this.createCheckboxes()}

                            <button className="btn btn-default" type="submit">Save</button>
                        </form>

                    </div>
                </div>
            </div>
        );
    }
}

export default Application;