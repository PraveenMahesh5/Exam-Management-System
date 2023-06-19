import React,{useState,useEffect} from 'react'
import axios from 'axios';
import {useParams} from "react-router-dom";
function UpdateResult() {
    const {student_Code} = useParams(); // getting url id        
    const URL = `http://localhost:8080/result/results/${student_Code}`;
   
    useEffect(()=>{
        getBookById();
    },[])
    const [process_result, setprocess_result] = useState({
        student_Code:"",
        class_Code:"",
        exam_Code:"",   
        total_Marks_Scored:"",        
        grade:"",   
        remarks:"",   
    });
    const { class_Code, exam_Code,total_Marks_Scored,grade,remarks} = process_result;
    const onInputChange = e =>{
        setprocess_result({...process_result,[e.target.name]:e.target.value})
    }
    
    const FormHandle = e =>{
        e.preventDefault();
        updateDataToServer(process_result)      
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
        const process_resultInfo = await axios.get(URL);
        setprocess_result(process_resultInfo.data);       
    }
   
    return (
        <div class="lists" align="center">
           
                <div class="container">
                    <h1 class="font">Update Results!</h1>
                    
                    <form onSubmit={e => FormHandle(e)}>
                    <div class="topi">
                            <label for="exampleInputEmail1">Class Code</label>
                            <input type="text" class="form-control" name="class_Code"   placeholder="Enter Here" value={class_Code} onChange={(e) =>onInputChange(e)} />
                       </div>
                       <div class="topi">
                       
                            <label for="exampleInputPassword1">Exam Code</label>
                            <input type="text" class="form-control" name="exam_Code"   placeholder="Enter Here" value={exam_Code} onChange={(e) =>onInputChange(e)} />
                        </div>
                        <div class="topi">
                        
                            <label for="exampleInputPassword1">Total Marks Scored</label>
                            <input type="text" class="form-control" name="total_Marks_Scored"  placeholder="Enter Here" value={total_Marks_Scored} onChange={(e) =>onInputChange(e)}  />
                        </div>
                        <div class="topi">
                            <label for="exampleInputPassword1">Grade</label>
                            <input type="text" class="form-control" name="grade"  placeholder="Enter Here" value={grade} onChange={(e) =>onInputChange(e)}  />
                            </div>
                            <div class="topi">
                            <label for="exampleInputPassword1">Remarks</label>
                            <input type="text" class="form-control" name="remarks"  placeholder="Enter Here" value={remarks} onChange={(e) =>onInputChange(e)}  />
                       </div>
                        <button type="submit" class="button">Update Result</button>
                        {/* <button type="reset" class="buttonno">Clear Result</button> */}
                        
                    </form>
                </div>
            </div>
            
        
    )
}

export default UpdateResult;