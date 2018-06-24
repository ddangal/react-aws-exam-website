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
        this.fetchdata()
    }




     FetchData = () =>
    {

    }
    fetchdata(){
        fetch('https://d2t46sp5qi.execute-api.us-east-1.amazonaws.com/retrieve-weekly/retrieve-weekly').
        then((Response) => Response.json()).
        then((resp)=>
        {


            this.setState({
                data: resp["res"]
            });
            // console.log(resp.res);
        });
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
        // var data2 = data1[0];
        // var data3 = data1.responseText;
        // var data3 = data2["answer"]
        // console.log(data1)


        return(
           <div>
                <h2>1) {question1}</h2>
               <form action="">
               A. <input className="answer" type="checkbox" name="" id=""/>{ans11}<br/>
               B. <input className="answer" type="checkbox" name="" id=""/>{ans12}<br/>
               C. <input className="answer" type="checkbox" name="" id=""/>{ans13}<br/>
               D. <input className="answer" type="checkbox" name="" id=""/>{ans14}<br/>

               <h2>2) {question2}</h2>
                   A. <input className="answer" type="checkbox" name="" id=""/>{ans21}<br/>
                   B. <input className="answer" type="checkbox" name="" id=""/>{ans22}<br/>
                   C. <input className="answer" type="checkbox" name="" id=""/>{ans23}<br/>
                   D. <input className="answer" type="checkbox" name="" id=""/>{ans24}<br/>


               </form>

               <div className="main-header">
                   <div className="inner">
                       {
                           /*this.state.data.map((examData,key) =>
                           <div>
                               {}
                           </div>
                           )*/
                       }
                   </div>
               </div>


               {/*<form action="">*/}
                    {/*A  <input type="checkbox" name=""/> An explicit deny does not override an explicit allow <br/>*/}
                    {/*B  <input type="checkbox" name=""/> An explicit deny does not override an explicit allow <br/>*/}
                  {/*C  <input type="checkbox" name=""/> An explicit deny does not override an explicit allow <br/>*/}
                  {/*D  <input type="checkbox" name=""/> An explicit deny does not override an explicit allow <br/>*/}
                {/*<br/>*/}
                    {/*<a href="../components/Question1.js"><input type="submit" value="preview"/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*/}
                    {/*</a>*/}
                    {/*&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*/}
                    {/*<input type="submit" value="next"/>*/}
                {/*</form>*/}
            </div>
        )
    }
}

