import React, { Component } from 'react';
import axios from 'axios';
var api = "https://d2t46sp5qi.execute-api.us-east-1.amazonaws.com/retrieve-weekly/retrieve-weekly"
export default class Enter_daily extends Component {
    constructor() {
        super();
        this.state = {
            data1:[],
            options: [],
            disabled:false
        }
        ;
    }

    toggle = () => {
        this.setState((state) =>({
            disabled: !state.disabled,
        }));
    }

    componentDidMount()
    {
        this.fetchdata()
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

        var list=[]
        console.log(this.state.options)
        for(var i=0;i<this.state.data1.length;i++){
            var ansdeep=[]
            for(var j=0;j<answer[i].length;j++){
                var val = i+1;
                var val1 = j+1;
                console.log();
                ansdeep.push(
                    <div>
                        <input value={""+val+""+val1} onChange={this.onChange.bind(this)}  className="answer" type="checkbox" disabled={this.state.disabled}/> {answer[i][j]}<br/>
                    </div>
                );

            }
            list.push(
                <div>
                    <h2>{i+1}) {question[i]}</h2>
                    {ansdeep}

                    <hr/>

                    <button onClick={this.toggle}>Done</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="checkbox"/>Check Again

                </div>

            )
        }

        return <div>
            <form action="">
                {list}
            </form>
            }


        </div>
    }


}