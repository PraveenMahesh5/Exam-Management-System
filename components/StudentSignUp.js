import axios from "axios";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
 
function StudentSignUp()
{
    const navigate=useNavigate();
   const [student_Code, setstudent_Code] = useState("");
   const [email_Address, setemail_Address] = useState("");
   const [password, setpassword] = useState("");
   const [confirm_Password, setconfirm_Password] = useState("");
 
   async function handleSubmit(event)
    {
        event.preventDefault();
    try
        {
         await axios.post("http://localhost:8080/users",
        {
          student_Code: student_Code,
          email_Address: email_Address,
          password : password,
          confirm_Password : confirm_Password,
        });
          alert("User Registation Successfully done");
          setstudent_Code("");
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
            <br/> <br/>
            <div class="box">
            <form className="register-form" onSubmit={handleSubmit}>
            <br></br>      
            <h1>Register</h1>
            <p>Fill in the Information Below</p>
 <label>Student Code: </label>
            <input type="number"
             name="student_Code"
             placeholder="student_Code"
             required pattern    
             onChange={(event) =>
              {
                  setstudent_Code(event.target.value);      
              }}
            />
            <br></br>
            <br></br>
            
 
 <label> Email:</label>
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
            <label> Password: </label>
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

export default StudentSignUp;