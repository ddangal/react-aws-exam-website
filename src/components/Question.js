import React, { Component } from 'react';
import axios from 'axios';
var api = "https://d2t46sp5qi.execute-api.us-east-1.amazonaws.com/retrieve-weekly/retrieve-weekly"
export default class Enter_daily extends Component {
    constructor() {
        super();
        this.state = {
            data1:[]
        }
        ;
    }
    componentDidMount()
    {
        this.fetchdata()
    }

    fetchdata(){
        axios.get(api, {
            params: {

            }
        })
            .then(response => {
              this.setState({
                  data1: response.data["res"]
              })

              //console.log(response.data["res"]);
            })
            .catch(error => {
                if(error['message']==="Network Error") {
                    localStorage.clear()
                    alert("Your session has expired! Log in again...")
                    this.props.history.push('/login/company')
                }
            });
    }
    render(){
        var question = [];
        var answer = new Array();
        answer[0] = new Array();
        answer[1] = new Array();
        answer[2] = new Array();
        answer[3] = new Array();
        answer[4] = new Array();
        answer[5] = new Array();
        answer[6] = new Array();
        answer[7] = new Array();
        answer[8] = new Array();

        // var ans[] =new Array;
        for(var i =0;i<this.state.data1.length;i++)
        {
          //  answer[i] = new Array();
            question[i] = this.state.data1[i]["question"];
            for(var j =0;j<this.state.data1[i]["answer"].length;j++)
            {
                answer[i][j] = this.state.data1[i]["answer"][j];
            }
        }

    console.log(answer[0][0])

        //}

        //
        // var question1=this.state.data[0];
        // var ans11=this.state.data[1];
        // var ans12=this.state.data[2];
        // var ans13=this.state.data[3];
        // var ans14=this.state.data[4];
        // var question2=this.state.data[5];
        // var ans21=this.state.data[6];
        // var ans22=this.state.data[7];
        // var ans23=this.state.data[8];
        // var ans24=this.state.data[9];

            return <div>
                {for(var k = 0; k < question.length;k++)
                {
                    <h2>1){answer.length} {question[0]}</h2>
                    <form action="">
                    A. <input className="answer" type="checkbox" name="" id=""/>{answer[0][0]}<br/>
                    B. <input className="answer" type="checkbox" name="" id=""/>{answer[0][1]}<br/>
                    C. <input className="answer" type="checkbox" name="" id=""/>{answer[0][2]}<br/>
                    D. <input className="answer" type="checkbox" name="" id=""/>{answer[0][3]}<br/>
                    <input type="checkbox"/>Done &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="checkbox"/>Check Again

                {/*<h2>2) {question[1]}</h2>*/}
                {/*A. <input className="answer" type="checkbox" name="" id=""/>{answer[1][0]}<br/>*/}
                {/*B. <input className="answer" type="checkbox" name="" id=""/>{answer[1][1]}<br/>*/}
                {/*C. <input className="answer" type="checkbox" name="" id=""/>{answer[1][2]}<br/>*/}
                {/*D. <input className="answer" type="checkbox" name="" id=""/>{answer[1][3]}<br/>*/}


                    </form>
                }
                }


            </div>
        }


}

