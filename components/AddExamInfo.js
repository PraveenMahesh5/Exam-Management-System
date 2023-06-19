import React, { useState } from 'react'
import axios from 'axios';

function AddExamInfo(){
       //Step 1:
    const [set_exam_information, setset_exam_information] = useState({
        question_Paper_Code:'',
        subject_Code:'',
        maximum_Score_For_Part_A:'',
        maximum_Score_For_Part_B:'',
        maximum_Score_For_Part_C:'',
        number_Of_Question_in_Part_A:'',
        number_Of_Question_in_Part_B:'',
        number_Of_Question_in_Part_C:'',
        total_Score:'',
       
    });
    //Step 3:
    const onInputChange = e => {
        setset_exam_information({ ...set_exam_information, [e.target.name]: e.target.value })
    }
    const {question_Paper_Code,subject_Code,maximum_Score_For_Part_A,maximum_Score_For_Part_B,maximum_Score_For_Part_C,number_Of_Question_in_Part_A,number_Of_Question_in_Part_B,number_Of_Question_in_Part_C,total_Score} = set_exam_information;
    const FormHandle = e => {
        e.preventDefault();
        addDataToServer(set_exam_information)
    }
    const addDataToServer = (data) => {
        axios.post("http://localhost:8080/exams", data).then(
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
        <div class="list1" align="center">
        <div className="container">
        <th><a href="/NavBar" class="btn btn-primary btn-lg" role="button">HOME</a></th>
     
                        <h1 class="display-4 text-center">Add Informations!</h1>
                        <div>
                            <form onSubmit={e => FormHandle(e)}>
                            <div class="topi">
                                    <label for="exampleInputPassword1">Question Paper Code</label>
                                    <input type="text" class="form-control" name="question_Paper_Code"  placeholder="Enter Here" value={question_Paper_Code} onChange={(e) => onInputChange(e)} />
                                </div>
                            <div class="topi">
                                    <label for="exampleInputPassword1">subject_Code</label>
                                    <input type="text" class="form-control" name="subject_Code"  placeholder="Enter Here" value={subject_Code} onChange={(e) => onInputChange(e)} />
                                </div>
                                <div class="topi">
                                    <label for="exampleInputPassword1">Maximum Score For Part A</label>
                                    <input type="text" class="form-control" name="maximum_Score_For_Part_A"  placeholder="Enter Here" value={maximum_Score_For_Part_A} onChange={(e) => onInputChange(e)} />
                                </div>
                                <div class="topi">
                                    <label for="exampleInputPassword1">Maximum Score For Part B</label>
                                    <input type="text" class="form-control" name="maximum_Score_For_Part_B"  placeholder="Enter Here" value={maximum_Score_For_Part_B} onChange={(e) => onInputChange(e)} />
                                </div>
                                <div class="topi">
                                    <label for="exampleInputPassword1">Maximum Score For Part C</label>
                                    <input type="text" class="form-control" name="maximum_Score_For_Part_C"  placeholder="Enter Here" value={maximum_Score_For_Part_C} onChange={(e) => onInputChange(e)} />
                                </div>
                                <div class="topi">
                                    <label for="exampleInputEmail1">Number Of Question In Part A</label>
                                    <input type="text" class="form-control" name="number_Of_Question_in_Part_A"  placeholder="Enter Here" value={number_Of_Question_in_Part_A} onChange={(e) => onInputChange(e)} />
                                </div>
                                <div class="topi">
                                    <label for="exampleInputEmail1">Number Of Question In Part B</label>
                                    <input type="text" class="form-control" name="number_Of_Question_in_Part_B"  placeholder="Enter Here" value={number_Of_Question_in_Part_B} onChange={(e) => onInputChange(e)} />
                                </div>
                                <div class="topi">
                                    <label for="exampleInputEmail1">Number Of Question In Part C</label>
                                    <input type="text" class="form-control" name="number_Of_Question_in_Part_C"  placeholder="Enter Here" value={number_Of_Question_in_Part_C} onChange={(e) => onInputChange(e)} />
                                </div>
                                <div class="topi">
                                    <label for="exampleInputEmail1">Total Score</label>
                                    <input type="text" class="form-control" name="total_Score"  placeholder="Enter Here" value={total_Score} onChange={(e) => onInputChange(e)} />
                                </div>
                                
                                <div className="container text-center">
                                    <button type="submit" class="button">Add Results</button>
                                    {/* <button type="reset" class="buttonno">Clear Results</button> */}
                                   
                                </div>
                            </form>
                        </div>
                        </div>
                        </div>
                  
    )
    }


export default AddExamInfo;