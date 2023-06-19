import axios from 'axios';
import React from 'react'
import { Button, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ResultService from '../services/ResultService';
class ResultEntryPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            process_result: [],
            currentPage: 1,
            recordPerPage: 7,
            search: '',
            
        }
    }
    componentDidMount() {
        this.getprocess_resultByPagination(this.state.currentPage);
    }
    getprocess_resultByPagination(currentPage) {
        currentPage = currentPage - 1;
        axios.get("http://localhost:8080/results?page=" + currentPage + "&size=" + this.state.recordPerPage)
            .then(response => response.data).then((data) => {
                this.setState({
                    process_result: data.content,
                    totalPages: data.totalPages,
                    totalElements: data.totalElements,
                    currentPage: data.number + 1
                });
            });
    }
    //Writing All the pagination functions
    //Show Next page
    showNextPage = () => {
        if (this.state.currentPage < Math.ceil(this.state.totalElements / this.state.recordPerPage)) {
            if (!this.state.search) {
                this.getprocess_resultByPagination(this.state.currentPage + 1);
            } else {
                this.searchprocess_result(this.state.currentPage + 1)
            }
        }
    };
    //Show Last Page
    showLastPage = () => {
        if (this.state.currentPage < Math.ceil(this.state.totalElements / this.state.recordPerPage)) {
            if (!this.state.search) {
                this.getprocess_resultByPagination(Math.ceil(this.state.totalElements / this.state.recordPerPage));
            }
            else {
                this.searchprocess_result(Math.ceil(this.state.totalElements / this.state.recordPerPage));
            }
        }
    };
    //Show First page
    showFirstPage = () => {
        let firstPage = 1;
        if (this.state.currentPage > firstPage) {
            if (!this.state.search) {
                this.getprocess_resultByPagination(firstPage);
            } else {
                this.searchprocess_result(firstPage)
            }
        }
    };
    //Show previous page
    showPrevPage = () => {
        let prevPage = 1
        if (this.state.currentPage > prevPage) {
            if (!this.state.search) {
                this.getprocess_resultByPagination(this.state.currentPage - prevPage);
            } else {
                this.searchprocess_result(this.state.currentPage - prevPage);
            }
        }
    };
    //Search Box Method
    searchBox = (e) => {
        this.setState({
            //assigning value to event target
            [e.target.name]: e.target.value,
        });
    };
    //Search Method Logic
    searchprocess_result = (currentPage) => {
        currentPage = currentPage - 1;
        axios.get("http://localhost:8080/results/" + this.state.search + "?page=" + currentPage + "&size=" + this.state.recordPerPage)
            .then(response => response.data).then((data) => {
                this.setState({
                    process_result: data.content,
                    totalPages: data.totalPages,
                    totalElements: data.totalElements,
                    currentPage: data.number + 1
                });
            });
    };
    //Reset Search Box
    resetprocess_result = (currentPage) => {
        this.setState({ "search": '' });
        this.getprocess_resultByPagination(this.state.currentPage);
    };
    //Delete Book on the web page
    deleteBystudent_Code = (student_Code) => {
        axios.delete("http://localhost:8080/results/" + student_Code).then(
            (response) => {
                alert("Record Deleted Successfully");
                this.setState({
                    process_result: this.state.process_result.filter(process_results => process_results.student_Code!== student_Code)
                });
            }, (error) => {
                alert("Operation Failed Here");
            }
        );
    };
    render() {
        const { process_result, currentPage, totalPages, recordPerPage, search } = this.state;
        return (
            <div class="lists">
                 <th><a href="/NavBar"  class="btn btn-primary btn-lg" role="button">HOME</a></th>
                <h1 class="h1 " align="center">List of Student Results</h1>
                <div className="container mt-2">
                    <div style={{ float: 'center' }} align="center">
                        
                    </div>
                    <table className="table table-bordered border-info shadow">
                        <thead>
                            <tr>
                                
                                <th>Student_Code</th>
                                <th>Class_Code</th>
                                <th>Exam_code</th>
                                <th>Total_Marks_Scored</th>
                                <th>Grade</th>
                                <th>Remarks</th>
                            </tr>
                        </thead>
                        <tbody>
                            {process_result.length === 0 ?
                                <tr align="center"><td colSpan="5">No Record Found</td></tr> :
                                process_result.map(
                                    (process_result, index) => (
                                        <tr key={process_result.student_Code}>
                                            <td>{(recordPerPage * (currentPage - 1)) + index + 1}</td>
                                            
                                            <td>{process_result.class_Code}</td>
                                            <td>{process_result.exam_Code}</td>
                                            <td>{process_result.total_Marks_Scored}</td>
                                            <td>{process_result.grade}</td>
                                            <td>{process_result.remarks}</td>
                                            <td><button className="btn btn-outline-danger" onClick={() => { this.deleteBystudent_Code(process_result.student_Code) }}>Delete</button>
                                            <Link to={`/updateResult/${process_result.student_Code}`} className="btn btn-outline-dark">Edit</Link>
                                            </td>
                                        </tr>
                                    )
                                )
                            }
                        </tbody>
                    </table>
                    <table className="table">
                        <div style={{ float: 'left', fontFamily: 'monospace', color: '#0275d8' }}>
                            Page {currentPage} of {totalPages}
                        </div>
                        <div style={{ float: 'right' }}>
                            <div class="clearfix"></div>
                            <nav aria-label="Page navigation example">
                                <ul class="pagination">
                                    <li class="page-item"><a type="button" class="page-link" disabled={currentPage === 1 ? true : false} onClick={this.showPrevPage}>Previous</a></li>
                                    <li class="page-item"><a type="button" class="page-link" disabled={currentPage === 1 ? true : false} onClick={this.showFirstPage}>First</a></li>
                                    <li class="page-item"><a type="button" class="page-link" disabled={currentPage === totalPages ? true : false} onClick={this.showNextPage}>Next</a></li>
                                    <li class="page-item"><a type="button" class="page-link" disabled={currentPage === totalPages ? true : false} onClick={this.showLastPage}>Last</a></li>
                                </ul>
                            </nav>
                        </div>
                    </table>
                </div>
               
            </div>
        )
    }
}
export default ResultEntryPage;