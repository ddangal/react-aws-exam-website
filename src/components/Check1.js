import React, { Component } from 'react';



export default class Check1 extends Component {
    constructor()
    {
        super();
        this.state = {
            days:[]
        }

    }

    handleDaySelect(event){
        let day_list = this.state.days;
        let check = event.target.checked;
        let checked_day = event.target.value;
        if(check){
            this.setState({
                days: [...this.state.days, checked_day]
            })
        }else{
            var index = day_list.indexOf(checked_day);
            if (index > -1) {
                day_list.splice(index, 1);
                this.setState({
                    days: day_list
                })
            }
        }
    }




    render() {

        const daysOptions = ["Monday", "Tuesday", "Wednesday", "Thursday",
            "Friday", "Saturday", "Sunday"].map((cur, ind) => {
            return (
                <div key={ind} className="checks" >
                    <label>
                        <input type="checkbox" name={cur} value={cur}
                               onChange={this.handleDaySelect} />{cur}
                    </label>
                </div>
            )
        })
        return (
            <div id="newDeal" className="formContainer" >

                <div className="checkBoxContainer" >
                    {daysOptions}
                </div>
            </div>
        )
    }
}

