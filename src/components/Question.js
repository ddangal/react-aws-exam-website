import React, { Component } from 'react';
import axios from 'axios';
import sweetAlert from 'sweetalert'
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css
var post_api = "https://ujai96180i.execute-api.us-east-1.amazonaws.com/web-exam/exam-web"
// var get_api = "https://ujai96180i.execute-api.us-east-1.amazonaws.com/web-exam/exam-web"
var get_api = "https://0mbjzz7yd9.execute-api.us-east-1.amazonaws.com/exam-backend/examsite-backend"
export default class Enter_daily extends Component {
    constructor() {
        super();
        this.state = {
            fetched_data:[],
            user_answer:{} ,
            disabled:false,
            check:[],
            complete: false,
            info:'',
            black: true,
            checkAgainIndex:0

        };
        this.handleCheck=this.handleCheck.bind(this)
    }
    handleCheck(i, event){
        event.preventDefault()
        var list=this.state.check
        list.push(i)
        this.setState({
            check:list
        });
    }
    submit = (event) => {
        confirmAlert({
            title: 'Confirm to submit',
            message: 'Are you sure to do this.',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => this.handleSubmit(event)
                },
                {
                    label: 'No',
                    onClick: () => ""
                }
            ]
        })
    };

    handleSubmit = event => {
        event.preventDefault();
        this.setState({
            info:"Please Wait..."
        })
        const user = {
            name: this.state.user_answer,
            questionnumber:this.state.fetched_data.length
    };


        axios.post(get_api, { user: user})
            .then(res => {
                sweetAlert("Result:\n\n" +
                    "Total Number of Questions:  "+this.state.fetched_data.length+"\n\n" +
                    "Total Correct Answers: " +res.data+
                    "\n\n Total Wrong Answers: " + (this.state.fetched_data.length-res.data)+
                    "");
                console.log(res);
                console.log(res.data);
                this.setState({
                    info:""
                })
            })
    }

    componentDidMount()
    {
        this.fetchdata()
    }

    onChange(i, e) {
        // current array of user_answer
        const user_answer1 = this.state.user_answer
        let index
        var q=(i+1).toString()
        var new1=[]
        // check if the check box is checked or unchecked
        if (e.target.checked) {
            // add the numerical value of the checkbox to user_answer array
            var pre=user_answer1[i+1]

            if(pre===undefined) {

                new1.push(e.target.value)
                user_answer1[q] = new1
            }
            else{
                var new1=pre
                new1.push(e.target.value)
                user_answer1[q]=new1
            }
        }
        else {
            new1 = user_answer1[i+1].indexOf(e.target.value)
            user_answer1[i+1].splice(new1, 1)
        }

        // update the state with the new array of user_answer
        this.setState({ user_answer: user_answer1 })
        console.log(this.state.user_answer)


    }
    changeColor(i){
        this.setState({black: !this.state.black})
        console.log(i);
        this.setState({checkAgainIndex:i})
    }

    fetchdata(){
        axios.get(post_api, {
            params: {

            }
        })
            .then(response => {
                this.setState({
                    fetched_data: response.data["res"]
                })
            })
            .catch(error => {
            });
    }
    render(){
        var question = [];
        var answer = new Array();
        for(var l = 0; l<this.state.fetched_data.length;l++)
        {
            answer[l] = new Array();
        }
        for(var i =0;i<this.state.fetched_data.length;i++)
        {
            question[i] = this.state.fetched_data[i]["question"];
            for(var j =0;j<this.state.fetched_data[i]["answer"].length;j++)
            {
                answer[i][j] = this.state.fetched_data[i]["answer"][j];
            }
        }
        var list=[]
        for(var i=0;i<this.state.fetched_data.length;i++){
            var ansdeep=[]
            let click=this.handleCheck.bind(this, i)
            for(var j=0;j<answer[i].length;j++){
                var val1 = j+1;
                ansdeep.push(
                    <div>
                        <input value={val1} onChange={this.onChange.bind(this, i)}  className="answer" type="checkbox" disabled={this.state.disabled}/> {answer[i][j]}<br/>
                    </div>
                );
            }
            let btn_class = this.state.black ? "" : "checkagainButton";
            list.push(
                <div className={ (i%2 ==0)?"bg_color_grey":"bg_color_white"}>
                    <div>
                        <h2 className={(i+1 == this.state.checkAgainIndex)? btn_class :""}>
                            {i+1}. {question[i]}
                           </h2>
                        {ansdeep}
                        <button value={i+1} onClick={this.changeColor.bind(this,i+1)}>Check Again</button>
                        <hr/>
                    </div>
                </div>
            )
        }
        return <div className="">
            {list}
            <hr/>
            <h2 className="SubmitValue">You are at the end... Please Review all before submitting it.</h2>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <h2>{this.state.info}</h2>
            <div className="SubmitValue">
            <button onClick={this.submit} className="SubmitValue">SUBMIT</button>
            </div>
        </div>
    }
}