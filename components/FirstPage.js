import React from "react";
import './style.css';
import {BrowserRouter as Router, Route,Link,NavLink,Switch} from 'react-router-dom'
function FirstPage()
{
    return(
        <div>
            <div class="head" align="center"><br/>
        <h1>WELCOME TO EMS PORTAL</h1>
        <br/>
        </div>
        <br/>

      <div class="header" align="center" >
        <a href="/StudentLogin" class="btn btn-primary btn-lg" role="button">For Students</a>
        <br></br>
        <br/>
       
        <a href="/TrainerLogin" class="btn btn-primary btn-lg" role="button">For Trainers</a>
        <br></br>
        <br></br>
        
        
        <a href="/AdminLogin" class="btn btn-primary btn-lg" role="button">For Admin</a>
    </div>
    </div>
   
)
}

export default FirstPage;