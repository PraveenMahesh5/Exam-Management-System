import React, { useState } from 'react'
import axios from 'axios';

function AddResult(){
       //Step 1:
    const [process_result, setprocess_result] = useState({
        student_Code:'',
        class_Code:'',
        exam_Code:'',
        total_Marks_Scored:'',
        grade:'',
        remarks:''
    });
    //Step 3:
    const onInputChange = e => {
        setprocess_result({ ...process_result, [e.target.name]: e.target.value })
    }
    const {student_Code,class_Code,exam_Code,total_Marks_Scored,grade,remarks} = process_result;
    const FormHandle = e => {
        e.preventDefault();
        addDataToServer(process_result)
    }
    const addDataToServer = (data) => {
        axios.post("http://localhost:8080/results", data).then(
            (response) => {
                console.log(response);
                alert("Result Added Successfully");
            }, (error) => {
                console.log(error);
                alert("Operation failed");
            }
        );
    }
    return (
        <div class="lists" align="center">
            <div className="container">
            <th><a href="/NavBar"  class="btn btn-primary btn-lg" id="home"  role="button">HOME</a></th>
                  
                        <h1 class="font">Add Results!</h1>
                        <div>
                            <form onSubmit={e => FormHandle(e)}>
                            <div class="topi">
                                    <label for="exampleInputPassword1">Student Code</label>
                                    <input type="text" class="form-control" name="student_Code"  placeholder="Enter Here" value={student_Code} onChange={(e) => onInputChange(e)} />
                               </div>
                               <div class="topi">
                                    <label for="exampleInputPassword1">ClassCode</label>
                                    <input type="text" class="form-control" name="class_Code"  placeholder="Enter Here" value={class_Code} onChange={(e) => onInputChange(e)} />
                               </div>
                               <div class="topi">
                                    <label for="exampleInputPassword1">Exam Code</label>
                                    <input type="text" class="form-control" name="exam_Code"  placeholder="Enter Here" value={exam_Code} onChange={(e) => onInputChange(e)} />
                             </div>
                             <div class="topi">
                                    <label for="exampleInputEmail1">Total Marks Scored</label>
                                    <input type="text" class="form-control" name="total_Marks_Scored"  placeholder="Enter Here" value={total_Marks_Scored} onChange={(e) => onInputChange(e)} />
                               </div>
                               <div class="topi">
                                    <label for="exampleInputEmail1">Grade</label>
                                    <input type="text" class="form-control" name="grade"  placeholder="Enter Here" value={grade} onChange={(e) => onInputChange(e)} />
                                </div>
                                <div class="topi">
                                    <label for="exampleInputEmail1">Remarks</label>
                                    <input type="text" class="form-control" name="remarks"  placeholder="Enter Here" value={remarks} onChange={(e) => onInputChange(e)} />
                                </div><br/>
                                    <button type="submit" class="button">Add Results</button>
                                    {/* <button type="reset" class="buttonno">Clear Results</button> */}
                                    <br/>
                                    
                               
                            </form>
                        </div>
                    </div>
                </div>
         
    )
    }


export default AddResult;