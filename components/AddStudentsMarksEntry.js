import React, { useState } from 'react'
import axios from 'axios';

function AddStudentsMarksEntry(){
       //Step 1:
    const [students_marks_entry, setstudents_marks_entry] = useState({
        exam_Code:'',
        student_Code:'',
        marks_Scored_In_Part_A:'',
        marks_Scored_In_Part_B:'',
        marks_Scored_In_Part_C:'',
        total_Marks_Scored:'',
        marks_Code:''
    });
    //Step 3:
    const onInputChange = e => {
        setstudents_marks_entry({ ...students_marks_entry, [e.target.name]: e.target.value })
    }
    const {exam_Code,student_Code,marks_Scored_In_Part_A,marks_Scored_In_Part_B,marks_Scored_In_Part_C,total_Marks_Scored,marks_Code} = students_marks_entry;
    const FormHandle = e => {
        e.preventDefault();
        addDataToServer(students_marks_entry)
    }
    const addDataToServer = (data) => {
        axios.post("http://localhost:8080/studentss", data).then(
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
            <th><a href="/NavBar"  class="btn btn-primary btn-lg" role="button">HOME</a></th>
               
                        <h1 class="font">Add Marks!</h1>
                        <div>
                            <form onSubmit={e => FormHandle(e)}>
                            
                                <div class="topi">
                                    <label for="exampleInputPassword1">Exam Code</label>
                                    <input type="text" class="form-control" name="exam_Code"  placeholder="Enter Here" value={exam_Code} onChange={(e) => onInputChange(e)} />
                                </div>
                                <div class="topi">
                                    <label for="exampleInputPassword1">Student Code</label>
                                    <input type="text" class="form-control" name="student_Code"  placeholder="Enter Here" value={student_Code} onChange={(e) => onInputChange(e)} />
                                </div>
                                <div class="topi">
                                    <label for="exampleInputEmail1">Marks Scored In Part A</label>
                                    <input type="text" class="form-control" name="marks_Scored_In_Part_A"  placeholder="Enter Here" value={marks_Scored_In_Part_A} onChange={(e) => onInputChange(e)} />
                                </div>
                                <div class="topi">
                                    <label for="exampleInputEmail1">Marks Scored In Part B</label>
                                    <input type="text" class="form-control" name="marks_Scored_In_Part_B"  placeholder="Enter Here" value={marks_Scored_In_Part_B} onChange={(e) => onInputChange(e)} />
                                </div>
                                <div class="topi">
                                    <label for="exampleInputEmail1">Marks Scored In Part C</label>
                                    <input type="text" class="form-control" name="marks_Scored_In_Part_C"  placeholder="Enter Here" value={marks_Scored_In_Part_C} onChange={(e) => onInputChange(e)} />
                                </div>
                                <div class="topi">
                                    <label for="exampleInputEmail1">Total Marks Scored</label>
                                    <input type="text" class="form-control" name="total_Marks_Scored"  placeholder="Enter Here" value={total_Marks_Scored} onChange={(e) => onInputChange(e)} />
                                </div>
                                <div class="topi">
                                    <label for="exampleInputEmail1">Marks Code</label>
                                    <input type="text" class="form-control" name="marks_Code"  placeholder="Enter Here" value={marks_Code} onChange={(e) => onInputChange(e)} />
                                </div>
                                <div className="container text-center">
                                    <button type="submit" class="button">Add Marks</button>
                                    {/* <button type="reset" class="buttonno">Clear Values</button> */}
                                    
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
        
    )
    }


export default AddStudentsMarksEntry;