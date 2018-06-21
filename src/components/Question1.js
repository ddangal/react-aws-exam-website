import React, { Component } from 'react';


export default class Enter_daily extends Component {
    render(){
        return(
            <div>
                <form action="">
                    <h3> Q.N.2Which of the following items are required to allow an application deployed on an EC2
                        instance to write data to a DynamoDB table? Assume that no security Keys are allowed to
                        be stored on the EC2 instance. Choose 2 answers

                    </h3>

                    A  <input type="checkbox" name=""/> An explicit deny does not override an explicit allow <br/>
                    B  <input type="checkbox" name=""/> An explicit deny does not override an explicit allow <br/>
                    C  <input type="checkbox" name=""/> An explicit deny does not override an explicit allow <br/>
                    D  <input type="checkbox" name=""/> An explicit deny does not override an explicit allow <br/>
                    <br/>
                    <input type="submit" value="preview"/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="submit" value="next"/>
                </form>
            </div>
        )
    }
}

