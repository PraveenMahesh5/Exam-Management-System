import React,{useState,useEffect} from 'react'
import axios from 'axios';
import {useParams} from "react-router-dom";
function UpdateClassTag() {
    const {student_Code} = useParams(); // getting url id        
    const URL = `http://localhost:8080/class/classes/${Exam_Code}`;
   
    useEffect(()=>{
        getBookById();
    },[])
    const [class_exam_tag, setclass_exam_tag] = useState({
        Exam_Code:"",
        Class_Code:"" 
    });
    const { Exam_Code,Class_Code } = class_exam_tag;
    const onInputChange = e =>{
        setclass_exam_tag({...class_exam_tag,[e.target.name]:e.target.value})
    }
    
    const FormHandle = e =>{
        e.preventDefault();
        updateDataToServer(class_exam_tag)      
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
        const class_exam_tagInfo = await axios.get(URL);
        setclass_exam_tag(class_exam_tagInfo.data);       
    }
   
    return (
        <div>
            <div className="container">
            <div className="w-75 mx-auto shadow p-5 mt-2 bg-light">
                <div class="jumbotron">
                    <h1 class="display-4 text-center">Update Tags!</h1>
                    <div>
                    <form onSubmit={e => FormHandle(e)}>
                    <div class="topi">
                            <label for="exampleInputPassword1">Exam Code</label>
                            <input type="text" class="form-control" name="Exam_Code"   placeholder="Enter Here" value={Exam_Code} onChange={(e) =>onInputChange(e)} />
                        </div>
                        <div class="topi">
                            <label for="exampleInputEmail1">Class Code</label>
                            <input type="text" class="form-control" name="Class_Code"   placeholder="Enter Here" value={Class_Code} onChange={(e) =>onInputChange(e)} />
                        </div>
                       
                        
                        <div className="container text-center">
                        <button type="submit" class="btn btn-outline-success my-2 text-center mr-2">Update Result</button>
                        {/* <button type="reset" class="btn btn-outline-primary text-center mr-2">Clear Result</button> */}
                        </div>
                    </form>
                </div>
            </div>
            </div>
        </div>
        </div>
    )
}

export default UpdateClassTag;