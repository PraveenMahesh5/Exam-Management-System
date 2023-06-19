import axios from 'axios';
import React from 'react'
import { Button, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import InfoService from '../services/InfoService';
class InfoEntryPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            set_exam_information: [],
            currentPage: 1,
            recordPerPage: 7,
            search: '',
            
        }
    }
    componentDidMount() {
        this.getset_exam_informationByPagination(this.state.currentPage);
    }
    getset_exam_informationByPagination(currentPage) {
        currentPage = currentPage - 1;
        axios.get("http://localhost:8080/exams?page=" + currentPage + "&size=" + this.state.recordPerPage)
            .then(response => response.data).then((data) => {
                this.setState({
                    set_exam_information: data.content,
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
                this.getset_exam_informationByPagination(this.state.currentPage + 1);
            } else {
                this.searchset_exam_information(this.state.currentPage + 1)
            }
        }
    };
    //Show Last Page
    showLastPage = () => {
        if (this.state.currentPage < Math.ceil(this.state.totalElements / this.state.recordPerPage)) {
            if (!this.state.search) {
                this.getset_exam_informationByPagination(Math.ceil(this.state.totalElements / this.state.recordPerPage));
            }
            else {
                this.searchset_exam_information(Math.ceil(this.state.totalElements / this.state.recordPerPage));
            }
        }
    };
    //Show First page
    showFirstPage = () => {
        let firstPage = 1;
        if (this.state.currentPage > firstPage) {
            if (!this.state.search) {
                this.getset_exam_informationByPagination(firstPage);
            } else {
                this.searchset_exam_information(firstPage)
            }
        }
    };
    //Show previous page
    showPrevPage = () => {
        let prevPage = 1
        if (this.state.currentPage > prevPage) {
            if (!this.state.search) {
                this.getset_exam_informationByPagination(this.state.currentPage - prevPage);
            } else {
                this.searchset_exam_information(this.state.currentPage - prevPage);
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
    searchset_exam_information = (currentPage) => {
        currentPage = currentPage - 1;
        axios.get("http://localhost:8080/exams/" + this.state.search + "?page=" + currentPage + "&size=" + this.state.recordPerPage)
            .then(response => response.data).then((data) => {
                this.setState({
                    set_exam_information: data.content,
                    totalPages: data.totalPages,
                    totalElements: data.totalElements,
                    currentPage: data.number + 1
                });
            });
    };
    //Reset Search Box
    resetset_exam_information = (currentPage) => {
        this.setState({ "search": '' });
        this.getset_exam_informationByPagination(this.state.currentPage);
    };
    //Delete Book on the web page
    deleteByquestion_Paper_Code = (question_Paper_Code) => {
        axios.delete("http://localhost:8080/exams/" + question_Paper_Code).then(
            (response) => {
                alert("Record Deleted Successfully");
                this.setState({
                    set_exam_information: this.state.set_exam_information.filter(set_exam_informations => set_exam_informations.question_Paper_Code!== question_Paper_Code)
                });
            }, (error) => {
                alert("Operation Failed Here");
            }
        );
    };
    render() {
        const { set_exam_information, currentPage, totalPages, recordPerPage, search } = this.state;
        return (
            <div class="lists">
                <th><a href="/NavBar"  class="btn btn-primary btn-lg"  align="center" role="button">HOME</a></th>
                <h1 class="h1 " align="center">List of Information</h1>
                <div className="container mt-2">
                    <div style={{ float: 'center' }} align="center">
                        
                    </div>
                    <table className="table table-bordered border-info shadow">
                        <thead>
                            <tr>
                                
                                <th>Question Paper Code</th>
                                <th>Subject Code</th>
                                <th>Maximum Score For Part A</th>
                                <th>Maximum Score For Part B</th>
                                <th>Maximum Score For Part C</th>
                                <th>Number Of Question In Part A</th>
                                <th>Number Of Question In Part B</th>
                                <th>Number Of Question In Part C</th>
                                <th>Total Score</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {set_exam_information.length === 0 ?
                                <tr align="center"><td colSpan="5">No Record Found</td></tr> :
                                set_exam_information.map(
                                    (set_exam_information, index) => (
                                        <tr key={set_exam_information.question_Paper_Code}>
                                            <td>{(recordPerPage * (currentPage - 1)) + index + 1}</td>
                                            
                                            <td>{set_exam_information.subject_Code}</td>
                                            <td>{set_exam_information.maximum_Score_For_Part_A}</td>
                                            <td>{set_exam_information.maximum_Score_For_Part_B}</td>
                                            <td>{set_exam_information.maximum_Score_For_Part_C}</td>
                                            <td>{set_exam_information.number_Of_Question_in_Part_A}</td>
                                            <td>{set_exam_information.number_Of_Question_in_Part_B}</td>
                                            <td>{set_exam_information.number_Of_Question_in_Part_C}</td>
                                            <td>{set_exam_information.total_Score}</td>
                                           
                                            <td><button className="btn btn-outline-danger" onClick={() => { this.deleteByquestion_Paper_Code(set_exam_information.question_Paper_Code) }}>Delete</button>
                                            <Link to={`/UpdateInfo/${set_exam_information.question_Paper_Code}`} className="btn btn-outline-dark">Edit</Link>
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
export default InfoEntryPage;