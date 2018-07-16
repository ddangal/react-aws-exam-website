import React, { Component } from 'react';
import axios from 'axios';
import sweetAlert from 'sweetalert'
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css
var post_api = "https://ujai96180i.execute-api.us-east-1.amazonaws.com/web-exam/exam-web"
var get_api = "https://ujai96180i.execute-api.us-east-1.amazonaws.com/web-exam/exam-web"
// var get_api = "https://0mbjzz7yd9.execute-api.us-east-1.amazonaws.com/exam-backend/examsite-backend"
export default class Enter_daily extends Component {
    constructor() {
        super();
        this.state = {
            fetched_data:[],
            user_answer:{} ,
            correct_answer:{},
            disabled:false,
            check:[],
            complete: false,
            info:'',
            black: true,
            checkAgainIndex:0,
            answer_color:'',
            answersubmitted:false

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
                    "Total Correct Answers: " +res.data['0']+
                    "\n\n Total Wrong Answers: " + (this.state.fetched_data.length-res.data['0'])+
                    "");
                // console.log(res.data[1]);
                //console.log(res.data[1][1][0]);
                // console.log(res.data[1][1][0]);
                //
                this.setState({

                    correct_answer: res.data[1],
                    info:"",
                    answersubmitted:true
                })
                var correct_ans_length = res.data[2];

                // for(var i =1;i<=correct_ans_length;i++){
                //     if(this.state.user_answer[i] != null){
                //         this.setState({
                //             user_answer:this.state.user_answer[i].sort()
                //         })
                //         // console.log(this.state.user_answer[i+1].sort());
                //     }
                //
                // }

                //this.state.correct_answer = res.data[1];

                // console.log(this.state.user_answer);
                // console.log(this.state.correct_answer[1].length);
                //console.log(this.state.correct_answer[1][0])

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
        // console.log(this.state.user_answer)


    }
    changeColor(i){
        this.setState({black: !this.state.black})
        // console.log(i);
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
        // console.log(this.state.correct_answer);
        var list=[]

        for(var i=0;i<this.state.fetched_data.length;i++){
            var ansdeep=[]
            let click=this.handleCheck.bind(this, i)
            for(var j=0;j<answer[i].length;j++){
                var val1 = j+1;
                if(this.state.answersubmitted){
                    // console.log("this is here")
                    // console.log(this.state.correct_answer[i+1][j])
                    var correct=false;
                    var user_ans_correct = false;
                    for(var k =0;k<this.state.correct_answer[i+1].length;k++){
                        if(val1 == this.state.correct_answer[i+1][k]) {
                            correct=true
                        }

                    }

                    // console.log(this.state.user_answer[i+1].length)
                    if(this.state.user_answer[i+1]!= null){
                        for(var l =0;l<this.state.user_answer[i+1].length;l++){
                            if(val1 == this.state.user_answer[i+1][l]) {
                                user_ans_correct=true
                            }

                        }
                    }

                    ansdeep.push(
                        <div className={(correct)?"green":(user_ans_correct)?"red":"answer"}>
                            <input value={val1} onChange={this.onChange.bind(this, i)} type="checkbox" disabled={this.state.disabled}/> {answer[i][j]}
                        </div>
                    );

                }

                else{
                    ansdeep.push(
                        <div className="answer">
                            <input value={val1} onChange={this.onChange.bind(this, i)} type="checkbox"
                                   disabled={this.state.disabled}/> {answer[i][j]}
                        </div>
                    );
                }
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
        return <div className="bottom-header">
            {list}
            <hr/>
            <h3 className="SubmitValue">You are at the end... Please Review all before submitting it.</h3>
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