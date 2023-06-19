import React from 'react';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
const navigate = useNavigate();
const [username, setusername] = useState("");
const [password, setpassword] = useState("");
const [authenticated, setauthenticated] = useState(
localStorage.getItem(localStorage.getItem("authenticated") || false)
);
const users = [{ username: "admin", password: "admin" },
                {username: "admin1", password: "admin1"}];
const handleSubmit = (e) => {
e.preventDefault();
const account = users.find((user) => user.username === username);
if (account && account.password === password) {
localStorage.setItem("authenticated", true);
navigate("/NavBar");
}
};
return (
<div class="first" align="center">
    <br/><br/><br/>
    <br/>
    <div class="box">
        
       
<form onSubmit={handleSubmit}>
    <h1> Login </h1>
    <br/>
    <label>Username:  </label>
 <input
 type="text"
 name="Username"
 value={username}
 onChange={(e) => setusername(e.target.value)}
 /><br/><br/>
 <label>Password:  </label>
 <input
 type="password"
 name="Password"
 onChange={(e) => setpassword(e.target.value)}
 /><br/><br/>
 <input type="submit" class="button" value="Submit" />


 </form>
</div>
</div>
);
};

export default AdminLogin;