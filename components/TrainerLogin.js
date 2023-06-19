import React from 'react';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {BrowserRouter as Router, Route,Link,NavLink,Switch} from 'react-router-dom'

const TrainerLogin = () => {
const navigate = useNavigate();
const [Trainer_Code, setTrainer_Code] = useState("");
const [Password, setPassword] = useState("");
const [authenticated, setauthenticated] = useState(
localStorage.getItem(localStorage.getItem("authenticated") || false)
);
const users = [{ Trainer_Code: "1", Password: "abc@123" }, 
{ Trainer_Code: "Trainer2", Password: "123456" }
];
const handleSubmit = (e) => {
e.preventDefault();
const account = users.find((user) => user.Trainer_Code === Trainer_Code);
if (account && account.Password === Password) {
localStorage.setItem("authenticated", true);
navigate("/NavBar");
}
};
return (

   
<div class="first" align="center">
    <br/> <br/> <br/> <br/>

<div class="box">
<form onSubmit={handleSubmit} >
<h1 > Login </h1>
<br/>
  
     
    <label>Trainer_Code:  </label>
 <input
 type="text"
 name="Trainer_Code"
 value={Trainer_Code}
 onChange={(e) => setTrainer_Code(e.target.value)}
 /><br/><br/>
 <label>Password:  </label>
 <input
 type="Password"
 name="Password"
 onChange={(e) => setPassword(e.target.value)}
 /><br/><br/>
 <input Link to ="/NavBar" type="submit" class="button" value="Submit" />
 <br/><br/>
 <label>Do not have an account?  <Link to ="/TrainerSignUp">SignUp</Link></label>
 </form>
</div>
</div>
);

};

export default TrainerLogin;