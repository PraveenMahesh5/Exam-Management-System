import React from 'react'
import { Link,useNavigate } from 'react-router-dom'


const LogOut = () => {
    const navigate=useNavigate();
    const handelClick = () =>{
      localStorage.clear();
      window.localStorage.clear();
      window.location.href = '/';
     console.log("logged out");
    }
  return (
    <div>
      <h1>Are You Sure You Wanna<br/> LogOut</h1>
      <br/><br/>
      <Link to='/'>
        <button onClick={()=>handelClick()} className='btn btn1 btn-outline-primary text-center mr-2'>
            Yes
        </button>
      </Link>
        <button className='btn btn2 btn-outline-primary text-center mr-2' onClick={()=>navigate(-1)}>
            No
        </button>
    </div>
  )
}

export default LogOut;