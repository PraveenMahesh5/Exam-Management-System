import React,{useState,useEffect} from 'react'
import axios from 'axios';
import {useParams} from "react-router-dom";
function UpdateMarks() {
    const {exam_Code} = useParams(); // getting url id        
    const URL = `http://localhost:8080/student/studentss/${exam_Code}`;
   
    useEffect(()=>{
        getBookById();
    },[])
    const [students_marks_entry, setstudents_marks_entry] = useState({
        exam_Code:"",
        student_Code:"",
        marks_Scored_In_Part_A:"",
        marks_Scored_In_Part_B:"",
        marks_Scored_In_Part_C:"",   
        total_Marks_Scored:"",        
        marks_Code:"",
    });
    const {student_Code,marks_Scored_In_Part_A,marks_Scored_In_Part_B,marks_Scored_In_Part_C,total_Marks_Scored,marks_Code} = students_marks_entry;
    const onInputChange = e =>{
        setstudents_marks_entry({...students_marks_entry,[e.target.name]:e.target.value})
    }
    
    const FormHandle = e =>{
        e.preventDefault();
        updateDataToServer(students_marks_entry)      
    }
    const updateDataToServer=(data) =>{
        axios.put(URL,data).then(
           (response)=>{
                   alert("Result Updated Successfully");
            },(error)=>{
                    alert("Operation failed");
            }
        );
    };
    
    const getBookById= async e =>{
        const students_marks_entryInfo = await axios.get(URL);
        setstudents_marks_entry(students_marks_entryInfo.data);       
    }
   
    return (
        <div class="lists" align="center">
            <div className="container">
   
                    <h1 class="font">Update Marks!</h1>
                    <div>
                    <form onSubmit={e => FormHandle(e)}>
                        
                     
                        <div class="topi">
                            <label for="exampleInputEmail1">Student Code</label>
                            <input type="text" class="form-control" name="student_Code"   placeholder="Enter Here" value={student_Code} onChange={(e) =>onInputChange(e)} />
                        </div>
                        <div class="topi">
                            <label for="exampleInputEmail1">Marks Scored In Part A</label>
                            <input type="text" class="form-control" name="marks_Scored_In_Part_A"   placeholder="Enter Here" value={marks_Scored_In_Part_A} onChange={(e) =>onInputChange(e)} />
                        </div>
                        <div class="topi">
                            <label for="exampleInputEmail1">Marks Scored In Part B</label>
                            <input type="text" class="form-control" name="marks_Scored_In_Part_B"   placeholder="Enter Here" value={marks_Scored_In_Part_B} onChange={(e) =>onInputChange(e)} />
                        </div>
                        <div class="topi">
                            <label for="exampleInputEmail1">Marks Scored In Part C</label>
                            <input type="text" class="form-control" name="marks_Scored_In_Part_C"   placeholder="Enter Here" value={marks_Scored_In_Part_C} onChange={(e) =>onInputChange(e)} />
                        </div>
                        <div class="topi">
                            <label for="exampleInputPassword1">Total Marks Scored</label>
                            <input type="text" class="form-control" name="total_Marks_Scored"  placeholder="Enter Here" value={total_Marks_Scored} onChange={(e) =>onInputChange(e)}  />
                        </div>
                        <div class="topi">
                            <label for="exampleInputPassword1">Marks Code</label>
                            <input type="text" class="form-control" name="marks_Code"  placeholder="Enter Here" value={marks_Code} onChange={(e) =>onInputChange(e)}  />
                        </div>
                        
                        <div className="container text-center">
                        <button type="submit" class="btn btn-outline-success my-2 text-center mr-2">Update Result</button>
                        {/* <button type="reset" class="btn btn-outline-primary text-center mr-2">Clear Result</button> */}
                        </div>
                    </form>
                </div>
            </div>
            </div>
        
    )
}

export default UpdateMarks;