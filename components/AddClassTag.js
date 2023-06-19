import React, { useState } from 'react'
import axios from 'axios';

function AddClassTag(){
       //Step 1:
    const [class_exam_tag, setclass_exam_tag] = useState({
        Exam_Code:'',
        Class_Code:''
    });
    //Step 3:
    const onInputChange = e => {
        setclass_exam_tag({ ...class_exam_tag, [e.target.name]: e.target.value })
    }
    const {Exam_Code,Class_Code} = class_exam_tag;
    const FormHandle = e => {
        e.preventDefault();
        addDataToServer(class_exam_tag)
    }
    const addDataToServer = (data) => {
        axios.post("http://localhost:8080/classes", data).then(
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

                        <h1 class="font">Add Class Tags!</h1>
                        <div>
                            <form onSubmit={e => FormHandle(e)}>
                            <div class="topi">
                                    <label for="exampleInputPassword1">Exam Code</label>
                                    <input type="text" class="form-control" name="Exam_Code"  placeholder="Enter Here" value={Exam_Code} onChange={(e) => onInputChange(e)} />
                                </div>
                            <div class="topi">
                                    <label for="exampleInputPassword1">Class Code</label>
                                    <input type="text" class="form-control" name="Class_Code"  placeholder="Enter Here" value={Class_Code} onChange={(e) => onInputChange(e)} />
                                </div>
                                
                                <div className="container text-center">
                                    <button type="submit" class="button">Add Values</button>
                                    {/* <button type="reset" class="buttonno">Clear Values</button> */}
                                    
                                </div>
                            </form>
                        </div>
                        </div>
                        </div>
       )           
    }


export default AddClassTag;