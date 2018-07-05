import React, { Component } from 'react';
import axios from 'axios';
import sweetAlert from 'sweetalert'
var api = "https://ujai96180i.execute-api.us-east-1.amazonaws.com/web-exam/exam-web"
export default class Enter_daily extends Component {
    constructor() {
        super();
        this.state = {
            data1:[],
            options:{} ,
            disabled:false,
            check:[],
            complete: false,
            info:''

        };
        this.handleCheck=this.handleCheck.bind(this)
    }

    toggle = () => {
        this.setState((state) =>({
            disabled: !state.disabled,
        }));
    }
    handleCheck(i, event){
        event.preventDefault()
        var list=this.state.check
        list.push(i)
        this.setState({
            check:list
        });
    }


    handleSubmit = event => {
        event.preventDefault();
        this.setState({
            info:"Please Wait..."
        })
        const user = {
            name: this.state.options,
            questionnumber:this.state.data1.length
    };

        axios.post("https://ujai96180i.execute-api.us-east-1.amazonaws.com/web-exam/exam-web", { user: user})
            .then(res => {
                sweetAlert("Result:\n\n" +
                    "Total Number of Questions:  "+this.state.data1.length+"\n\n" +
                    "Total Correct Answers: " +res.data+
                    "\n\n Total Wrong Answers: " + (this.state.data1.length-res.data)+
                    "");
                console.log(res);
                console.log(res.data);
                this.setState({
                    info:"Successfully submited"
                })
            })
    }

    componentDidMount()
    {
        this.fetchdata()
    }

    onChange(i, e) {
        // current array of options
        const options1 = this.state.options
        let index
        var q=(i+1).toString()
        var new1=[]
        // check if the check box is checked or unchecked
        if (e.target.checked) {
            // add the numerical value of the checkbox to options array
            var pre=options1[i+1]

            if(pre===undefined) {

                new1.push(e.target.value)
                options1[q] = new1
            }
            else{
                var new1=pre
                new1.push(e.target.value)
                options1[q]=new1
            }
        }
        else {
            new1 = options1[i+1].indexOf(e.target.value)
            options1[i+1].splice(new1, 1)

            // or remove the value from the unchecked checkbox from the array
            // index = options1.indexOf(+e.target.value)
            // options1.splice(index, 1)
        }

        // update the state with the new array of options
        this.setState({ options: options1 })
        console.log(this.state.options)


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

            });
    }
    render(){
        var question = [];
        var answer = new Array();
        for(var l = 0; l<this.state.data1.length;l++)
        {
            answer[l] = new Array();
        }


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
        //console.log(this.state.options)
        for(var i=0;i<this.state.data1.length;i++){
            var ansdeep=[]
            let click=this.handleCheck.bind(this, i)
            for(var j=0;j<answer[i].length;j++){
                //var val = i+1;
                var val1 = j+1;
                //console.log();
                ansdeep.push(
                    <div>
                        <input value={val1} onChange={this.onChange.bind(this, i)}  className="answer" type="checkbox" disabled={this.state.disabled}/> {answer[i][j]}<br/>
                    </div>
                );

            }
            list.push(
                <div className={ (i%2 ==0)?"bg_color_grey":"bg_color_white"}>
                    <div>
                        <h2 className={
                            (this.state.check.includes(i) ? "checkbox" : "")

                        }>
                            {i+1}. {question[i]}
                           </h2>
                        {ansdeep}
                        <button className="checkagain_button">Check Again</button>
                        <hr/>
                    </div>
                    {/*<button  onClick={this.toggle}>Done</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*/}
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {/*<input onChange={click1} type="checkbox"/>Done*/}
                    {/*<input onChange={click} type="checkbox"/>Check Again*/}

                </div>

            )
        }

        return <div>
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
            <button onClick={this.handleSubmit} className="SubmitValue">SUBMIT</button>
            <h2>{this.state.info}</h2>



        </div>
    }


}