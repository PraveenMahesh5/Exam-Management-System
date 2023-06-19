import React, { useState } from "react";
import "./NavBar.css";
import "bootstrap/dist/css/bootstrap.min.css";

const NavBar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="navbar">
      <a href="/LogOut" class="btn btn-primary" id="log"role="button" >LOGOUT</a>
      <th><a href="/NavBar"  class="btn btn-primary btn-lg" role="button">HOME</a></th>
      </nav>
        {/* 2nd menu part  */}

      
         
          
             <div class="dash">
        <div class="rowc">  
<div class="cards">
 <a href="/AddExamInfo" class="btn btn-primary" role="button">ADD EXAM INFORMATION</a></div>
 <div class="cards">
 
        <a href="/InfoEntryPage" class="btn btn-primary " role="button">EXAM INFORMATION</a>
        </div>
       
        <div class="cards">
             <a href="/AddClassTag" class="btn btn-primary " role="button">ADD CLASS TAG</a>
             </div>
             <div class="cards">
            <a href="/ClassTagEntry" class="btn btn-primary " role="button">LIST OF TAG</a>
            </div></div>

            <div class="rowc1">
            <div class="cards">
            <a href="/AddStudentsMarksEntry" class="btn btn-primary " role="button">ADD MARKS</a></div>
            <div class="cards">
            <a href="/MarksEntryPage" class="btn btn-primary " role="button">LIST OF MARKS</a></div>
            <div class="cards">
            <a  href="/AddResult" class="btn btn-primary " role="button">ADD RESULT</a></div>
            <div class="cards">
            <a href="/ResultEntryPage" class="btn btn-primary " role="button">LIST OF RESULT</a></div>
            </div>
            </div> 
         
           
       

    
    </>
  );
};

export default NavBar;