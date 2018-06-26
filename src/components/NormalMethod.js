import React, { Component } from 'react';
export default class Enter_daily extends Component {
    constructor() {
        super();
        this.state = {
            data:[]
        };
    }
    componentDidMount()
    {
        this.fetchdata();
    }
    fetchdata(){
        fetch('https://d2t46sp5qi.execute-api.us-east-1.amazonaws.com/retrieve-weekly/retrieve-weekly').
        //fetch('https://ujai96180i.execute-api.us-east-1.amazonaws.com/web-exam/exam-web').
        then((Response) => Response.json()).
        then((resp)=>
        {


            this.setState({
                data: resp["res"]
            });
            // console.log(resp.res);
        });
    }
    ClickedEvent = () =>
    {
        var ans = document.getElementById("A").checked;
        console.log(ans);
    }
    render(){
        var question1=this.state.data[0];
        var ans11=this.state.data[1];
        var ans12=this.state.data[2];
        var ans13=this.state.data[3];
        var ans14=this.state.data[4];
        var question2=this.state.data[5];
        var ans21=this.state.data[6];
        var ans22=this.state.data[7];
        var ans23=this.state.data[8];
        var ans24=this.state.data[9];

        return(
            <div>
                <h2>1) {question1}</h2>
                <form action="">
                    A. <input className="answer" type="checkbox" name="" id="A"/>{ans11}<br/>
                    B. <input className="answer" type="checkbox" name="" id="B"/>{ans12}<br/>
                    C. <input className="answer" type="checkbox" name="" id="C"/>{ans13}<br/>
                    D. <input className="answer" type="checkbox" name="" id="D"/>{ans14}<br/>
                    <button onClick={this.ClickedEvent()}>done</button>
                    {/*<input  onClick={() =>{this.ClickedEvent}} type="submit" value="done"/>*/}
                    {/*<input type="checkbox"/>Done &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*/}
                    <input type="checkbox"/>Check Again

                    <h2>2) {question2}</h2>
                    A. <input className="answer" type="checkbox" name="" id=""/>{ans21}<br/>
                    B. <input className="answer" type="checkbox" name="" id=""/>{ans22}<br/>
                    C. <input className="answer" type="checkbox" name="" id=""/>{ans23}<br/>
                    D. <input className="answer" type="checkbox" name="" id=""/>{ans24}<br/>


                </form>

            </div>

        )
    }
}

