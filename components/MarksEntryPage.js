import axios from 'axios';
import React from 'react'
import { Button, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import MarksService from '../services/MarksService';
class MarksEntryPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            students_marks_entry: [],
            currentPage: 1,
            recordPerPage: 7,
            search: '',
            
        }
    }
    componentDidMount() {
        this.getstudents_marks_entryByPagination(this.state.currentPage);
    }
    getstudents_marks_entryByPagination(currentPage) {
        currentPage = currentPage - 1;
        axios.get("http://localhost:8080/studentss?page=" + currentPage + "&size=" + this.state.recordPerPage)
            .then(response => response.data).then((data) => {
                this.setState({
                    students_marks_entry: data.content,
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
                this.getstudents_marks_entryByPagination(this.state.currentPage + 1);
            } else {
                this.searchstudents_marks_entry(this.state.currentPage + 1)
            }
        }
    };
    //Show Last Page
    showLastPage = () => {
        if (this.state.currentPage < Math.ceil(this.state.totalElements / this.state.recordPerPage)) {
            if (!this.state.search) {
                this.getstudents_marks_entryByPagination(Math.ceil(this.state.totalElements / this.state.recordPerPage));
            }
            else {
                this.searchstudents_marks_entry(Math.ceil(this.state.totalElements / this.state.recordPerPage));
            }
        }
    };
    //Show First page
    showFirstPage = () => {
        let firstPage = 1;
        if (this.state.currentPage > firstPage) {
            if (!this.state.search) {
                this.getstudents_marks_entryByPagination(firstPage);
            } else {
                this.searchstudents_marks_entry(firstPage)
            }
        }
    };
    //Show previous page
    showPrevPage = () => {
        let prevPage = 1
        if (this.state.currentPage > prevPage) {
            if (!this.state.search) {
                this.getstudents_marks_entryByPagination(this.state.currentPage - prevPage);
            } else {
                this.searchstudents_marks_entry(this.state.currentPage - prevPage);
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
    searchstudents_marks_entry = (currentPage) => {
        currentPage = currentPage - 1;
        axios.get("http://localhost:8080/studentss/" + this.state.search + "?page=" + currentPage + "&size=" + this.state.recordPerPage)
            .then(response => response.data).then((data) => {
                this.setState({
                    students_marks_entry: data.content,
                    totalPages: data.totalPages,
                    totalElements: data.totalElements,
                    currentPage: data.number + 1
                });
            });
    };
    //Reset Search Box
    resetstudents_marks_entry = (currentPage) => {
        this.setState({ "search": '' });
        this.getstudents_marks_entryByPagination(this.state.currentPage);
    };
    //Delete Book on the web page
    deleteByexam_Code = (exam_Code) => {
        axios.delete("http://localhost:8080/studentss/" + exam_Code).then(
            (response) => {
                alert("Record Deleted Successfully");
                this.setState({
                    students_marks_entry: this.state.students_marks_entry.filter(students_marks_entrys => students_marks_entrys.exam_Code!== exam_Code)
                });
            }, (error) => {
                alert("Operation Failed Here");
            }
        );
    };
    render() {
        const { students_marks_entry, currentPage, totalPages, recordPerPage, search } = this.state;
        return (
            <div class="lists">
                <th><a href="/NavBar"  class="btn btn-primary btn-lg" role="button">HOME</a></th>
                <h1 class="h1 " align="center">List of Student Marks</h1>
                <div className="container mt-2">
                    <div style={{ float: 'center' }} align="center">
                        
                    </div>
                    <table className="table table-bordered border-info shadow">
                        <thead>
                            <tr>
                                
                                <th>Exam Code</th>
                                <th>Student Code</th>
                                <th>Marks Scored In Part A</th>
                                <th>Marks Scored In Part B</th>
                                <th>Marks Scored In Part C</th>
                                <th>Total Marks Scored</th>
                                <th>Marks Code</th>
                            </tr>
                        </thead>
                        <tbody>
                            {students_marks_entry.length === 0 ?
                                <tr align="center"><td colSpan="5">No Record Found</td></tr> :
                                students_marks_entry.map(
                                    (students_marks_entry, index) => (
                                        <tr key={students_marks_entry.exam_Code}>
                                            <td>{(recordPerPage * (currentPage - 1)) + index + 1}</td>
                                            
                                            
                                            <td>{students_marks_entry.student_Code}</td>
                                            <td>{students_marks_entry.marks_Scored_In_Part_A}</td>
                                            <td>{students_marks_entry.marks_Scored_In_Part_B}</td>
                                            <td>{students_marks_entry.marks_Scored_In_Part_C}</td>
                                            <td>{students_marks_entry.total_Marks_Scored}</td>
                                            <td>{students_marks_entry.marks_Code}</td>
                                            <td><button className="btn btn-outline-danger" onClick={() => { this.deleteByexam_Code(students_marks_entry.exam_Code) }}>Delete</button>
                                            <Link to={`/updateMarks/${students_marks_entry.exam_Code}`} className="btn btn-outline-dark">Edit</Link>
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
export default MarksEntryPage;