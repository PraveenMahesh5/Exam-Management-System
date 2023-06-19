import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";


class ExamInfo extends React.Component{
    render()
    {
        return(
            <div class="table-responsive">
                <h1>Know More About Exam Information</h1>
                <br/>
                <br/>
                <table class="table table-striped table-bordered">
                    <thead>
                    <tr>
                        <th >Question_Paper_Code</th>
                        <th >Subject_Code</th>
                        <th >Subject_Name</th>
                        <th >Maximum_Score_For_Part_A</th>
                        <th >Maximum_Score_For_Part_B</th>
                        <th >Maximum_Score_For_Part_C</th>
                        <th >Number_Of_Question_In_Part_A</th>
                        <th >Number_Of_Question_In_Part_B</th>
                        <th >Number_Of_Question_In_Part_C</th>
                        <th >Total_Score</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1294782</td>
                        <td>21Cs32</td> 
                        <td>DataStructure</td>
                        <td>20</td>
                        <td>66</td>
                        <td>14</td>
                        <td>10</td>
                        <td>5</td>
                        <td>1</td>
                        <td>100</td>  
                    </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}
export default ExamInfo;