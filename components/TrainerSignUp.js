import axios from "axios";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
 
function TrainerSignUp()
{
    const navigate=useNavigate();
   const [trainer_Code, settrainer_Code] = useState("");
   const [email_Address, setemail_Address] = useState("");
   const [password, setpassword] = useState("");
   const [confirm_Password, setconfirm_Password] = useState("");
 
   async function handleSubmit(event)
    {
        event.preventDefault();
    try
        {
         await axios.post("http://localhost:8080/admins",
        {
            trainer_Code: trainer_Code,
          email_Address: email_Address,
          password : password,
          confirm_Password : confirm_Password,
        });
          alert("User Registation Successfully done");
          settrainer_Code("");
          setemail_Address("");
          setpassword("");
          setconfirm_Password("");
        
        }
    catch(err)
        {
          alert("User Registation Failed");
        }
   }
    return (
        <div className="first" align="center">
            <br/><br/>

            <div class="box">
            <form className="register-form" onSubmit={handleSubmit}>
            <br></br>      
            <h1>Register</h1>
            <p>Fill in the Information Below</p>
 <label>Trainer Code</label>
            <input type="number"
             name="trainer_Code"
             placeholder="trainer_Code"
             required pattern    
             onChange={(event) =>
              {
                  settrainer_Code(event.target.value);      
              }}
            />
            <br></br>
            <br></br>
            
 
              <label> Email: </label>
            <input type="text"
            name="email_Address"
            placeholder="email_Address"
            required pattern
            onChange={(event) =>
                {
                    setemail_Address(event.target.value);      
                }}          
            />
            <br></br>
            <br></br>
            <label>Password: </label>
            <input type="text"
            name="password"
            placeholder="password"
            required pattern 
            onChange={(event) =>
                {
                    setpassword(event.target.value);      
                }}          
            />
            <br></br>
            <br></br>
            <label>ReEnter: </label>
        <input type="text"
            name="confirm_Password"
            placeholder="confirm_Password"
            required pattern
            onChange={(event) =>
                {
                    setconfirm_Password(event.target.value);      
                }}          
            />
            <br></br>
            <br></br>
            <br></br>
            <div class="form-group">
                    <input type="checkbox" required></input>
                    <label>Do you agree that given details are correct?</label>
                    </div>
                    <br></br>
            <button Link to ="/NavBar" type="submit" class="button">Register</button>
            <button className='login-btn' onClick={()=>navigate(-1)}>Go Back</button>
 
    
 </form>    
 </div>

</div>
)
}

export default TrainerSignUp;