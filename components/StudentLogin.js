
import React from 'react';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {BrowserRouter as Router, Route,Link,NavLink,Switch} from 'react-router-dom'

const StudentLogin = () => {
//const isloggedIn=false;
const [Student_Code, setStudent_Code] = useState("");
const [Password, setPassword] = useState("");
const [authenticated, setauthenticated] = useState(
localStorage.getItem(localStorage.getItem("authenticated") || false)
);
const users = [{ Student_Code: "1", Password: "56789" }];
const navigate = useNavigate();
const handleSubmit = (e) => {
e.preventDefault();
const account = users.find((user) => user.Student_Code === Student_Code);
if (account && account.Password === Password) {
localStorage.setItem("authenticated", true);
navigate("/NavBar");
}
};
return (
<div align="center" class="first">
    <br/><br/>
    <br/><br/>
    <div class="box" >
<form onSubmit={handleSubmit}>
    <h1> Login </h1>
    <br/>
    <label>Student_Code:  </label>
 <input
 type="text"
 name="Student_Code"
 value={Student_Code}
 onChange={(e) => setStudent_Code(e.target.value)}/>
 <br/><br/>
 <label>Password:  </label>
 <input
 type="Password"
 name="Password"
 onChange={(e) => setPassword(e.target.value)}
 /><br/><br/>

<input  type="submit" class="button" value="Submit" />
 <br/><br/>
 <label>Do not have an account?  <Link to ="/StudentSignUp">SignUp</Link></label>
 </form>
</div>
</div>
);

};

export default StudentLogin;