import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Dashboard extends Component{
    render(){
        return(
            <div>
            <h1>Welcome to DashBoard</h1>
            <Link to ="/ExamInformation">Info</Link>
            </div>
        )
    }
}

export default Dashboard;