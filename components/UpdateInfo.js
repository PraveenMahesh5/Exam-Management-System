import React,{useState,useEffect} from 'react'
import axios from 'axios';
import {useParams} from "react-router-dom";
function UpdateInfo() {
    const {question_Paper_Code} = useParams(); // getting url id        
    const URL = `http://localhost:8080/exam/exams/${question_Paper_Code}`;
   
    useEffect(()=>{
        getBookById();
    },[])
    const [set_exam_information, setset_exam_information] = useState({
        question_Paper_Code:"",
        subject_Code:"",
        maximum_Score_For_Part_A:"",
        maximum_Score_For_Part_B:"",   
        maximum_Score_For_Part_C:"",
        number_Of_Question_in_Part_A:"",
        number_Of_Question_in_Part_B:"",
        number_Of_Question_in_Part_C:"",
        total_Score:"" 
    });
    const { subject_Code, maximum_Score_For_Part_A,maximum_Score_For_Part_B,maximum_Score_For_Part_C,number_Of_Question_in_Part_A,number_Of_Question_in_Part_B,number_Of_Question_in_Part_C,total_Score} = set_exam_information;
    const onInputChange = e =>{
        setset_exam_information({...set_exam_information,[e.target.name]:e.target.value})
    }
    
    const FormHandle = e =>{
        e.preventDefault();
        updateDataToServer(set_exam_information)      
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
        const set_exam_informationInfo = await axios.get(URL);
        setset_exam_information(set_exam_informationInfo.data);       
    }
   
    return (
        <div>
            <div className="container">
            <div className="w-75 mx-auto shadow p-5 mt-2 bg-light">
                <div class="jumbotron">
                    <h1 class="display-4 text-center">Update Information!</h1>
                    <div>
                    <form onSubmit={e => FormHandle(e)}>
                        <div class="topi">
                            <label for="exampleInputEmail1">Question Paper Code</label>
                            <input type="text" class="form-control" name="question_Paper_Code"   placeholder="Enter Here" value={question_Paper_Code} onChange={(e) =>onInputChange(e)} />
                        </div>
                        <div class="topi">
                            <label for="exampleInputPassword1">Subject Code</label>
                            <input type="text" class="form-control" name="subject_Code"   placeholder="Enter Here" value={subject_Code} onChange={(e) =>onInputChange(e)} />
                        </div>
                        <div class="topi">
                            <label for="exampleInputPassword1">Maximum Score For Part A</label>
                            <input type="text" class="form-control" name="maximum_Score_For_Part_A"  placeholder="Enter Here" value={maximum_Score_For_Part_A} onChange={(e) =>onInputChange(e)}  />
                        </div>
                        <div class="topi">
                            <label for="exampleInputPassword1">Maximum Score For Part B</label>
                            <input type="text" class="form-control" name="maximum_Score_For_Part_B"  placeholder="Enter Here" value={maximum_Score_For_Part_B} onChange={(e) =>onInputChange(e)}  />
                        </div>
                        <div class="topi">
                            <label for="exampleInputPassword1">Maximum Score For Part C</label>
                            <input type="text" class="form-control" name="maximum_Score_For_Part_C"  placeholder="Enter Here" value={maximum_Score_For_Part_C} onChange={(e) =>onInputChange(e)}  />
                        </div>
                        <div class="topi">
                            <label for="exampleInputPassword1">Number Of Question In Part A</label>
                            <input type="text" class="form-control" name="number_Of_Question_in_Part_A"  placeholder="Enter Here" value={number_Of_Question_in_Part_A} onChange={(e) =>onInputChange(e)}  />
                        </div>
                        <div class="topi">
                            <label for="exampleInputPassword1">Number Of Question In Part B</label>
                            <input type="text" class="form-control" name="number_Of_Question_in_Part_B"  placeholder="Enter Here" value={number_Of_Question_in_Part_B} onChange={(e) =>onInputChange(e)}  />
                        </div>
                        <div class="topi">
                            <label for="exampleInputPassword1">Number Of Question In Part C</label>
                            <input type="text" class="form-control" name="number_Of_Question_in_Part_C"  placeholder="Enter Here" value={number_Of_Question_in_Part_C} onChange={(e) =>onInputChange(e)}  />
                        </div>
                        <div class="topi">
                            <label for="exampleInputPassword1">Total Score</label>
                            <input type="text" class="form-control" name="total_Score"  placeholder="Enter Here" value={total_Score} onChange={(e) =>onInputChange(e)}  />
                        </div>
                        <div className="container text-center">
                        <button type="submit" class="btn btn-outline-success my-2 text-center mr-2">Update Info</button>
                        {/* <button type="reset" class="btn btn-outline-primary text-center mr-2">Clear Info</button> */}
                        </div>
                    </form>
                </div>
            </div>
            </div>
        </div>
        </div>
    )
}

export default UpdateInfo;