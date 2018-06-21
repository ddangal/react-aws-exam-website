import React, { Component } from 'react';

export default class Enter_daily extends Component {


    render(){
        return(
            <div>
                <h2>View Daily Data</h2>
                <table border="1">
                    <thead>
                    <td>Date</td>
                    <td>Customers</td>
                    <td>Income</td>
                    <td>Expense</td>
                    </thead>
                    <tbody>
                    <tr>
                        <td></td><td>20</td><td>3000</td><td>4000</td>
                    </tr>
                    <tr>
                        <td>2018/01/01</td> <td>20</td><td>3000</td><td>4000</td>
                    </tr>
                    <tr>
                        <td>2018/01/01</td> <td>20</td><td>3000</td><td>4000</td>
                    </tr>
                    <tr>
                        <td>2018/01/01</td> <td>20</td><td>3000</td><td>4000</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

