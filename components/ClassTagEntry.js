import axios from 'axios';
import React from 'react'
import { Button, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ClassTagService from '../services/ClassTagService';
class ClassTagEntry extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            class_exam_tag: [],
            currentPage: 1,
            recordPerPage: 7,
            search: '',
            
        }
    }
    componentDidMount() {
        this.getclass_exam_tagByPagination(this.state.currentPage);
    }
    getclass_exam_tagByPagination(currentPage) {
        currentPage = currentPage - 1;
        axios.get("http://localhost:8080/classes?page=" + currentPage + "&size=" + this.state.recordPerPage)
            .then(response => response.data).then((data) => {
                this.setState({
                    class_exam_tag: data.content,
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
                this.getclass_exam_tagByPagination(this.state.currentPage + 1);
            } else {
                this.searchclass_exam_tag(this.state.currentPage + 1)
            }
        }
    };
    //Show Last Page
    showLastPage = () => {
        if (this.state.currentPage < Math.ceil(this.state.totalElements / this.state.recordPerPage)) {
            if (!this.state.search) {
                this.getclass_exam_tagByPagination(Math.ceil(this.state.totalElements / this.state.recordPerPage));
            }
            else {
                this.searchclass_exam_tag(Math.ceil(this.state.totalElements / this.state.recordPerPage));
            }
        }
    };
    //Show First page
    showFirstPage = () => {
        let firstPage = 1;
        if (this.state.currentPage > firstPage) {
            if (!this.state.search) {
                this.getclass_exam_tagByPagination(firstPage);
            } else {
                this.searchclass_exam_tag(firstPage)
            }
        }
    };
    //Show previous page
    showPrevPage = () => {
        let prevPage = 1
        if (this.state.currentPage > prevPage) {
            if (!this.state.search) {
                this.getclass_exam_tagByPagination(this.state.currentPage - prevPage);
            } else {
                this.searchclass_exam_tag(this.state.currentPage - prevPage);
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
    searchclass_exam_tag = (currentPage) => {
        currentPage = currentPage - 1;
        axios.get("http://localhost:8080/classes/" + this.state.search + "?page=" + currentPage + "&size=" + this.state.recordPerPage)
            .then(response => response.data).then((data) => {
                this.setState({
                    class_exam_tag: data.content,
                    totalPages: data.totalPages,
                    totalElements: data.totalElements,
                    currentPage: data.number + 1
                });
            });
    };
    //Reset Search Box
    resetclass_exam_tag = (currentPage) => {
        this.setState({ "search": '' });
        this.getclass_exam_tagByPagination(this.state.currentPage);
    };
    //Delete Book on the web page
    deleteByExam_Code = (Exam_Code) => {
        axios.delete("http://localhost:8080/classes/" + Exam_Code).then(
            (response) => {
                alert("Record Deleted Successfully");
                this.setState({
                    class_exam_tag: this.state.class_exam_tag.filter(class_exam_tags => class_exam_tags.Exam_Code!== Exam_Code)
                });
            }, (error) => {
                alert("Operation Failed Here");
            }
        );
    };
    render() {
        const { class_exam_tag, currentPage, totalPages, recordPerPage, search } = this.state;
        return (
            <div class="list1">
                <th><a href="/NavBar"  class="btn btn-primary btn-lg" role="button">HOME</a></th>
                <h1 className="font" align ="center">List of Tags</h1>
                <div className="container mt-2">
                    <div style={{ float: 'center' }} align="center">
                        
                    </div>
                    <table className="table table-bordered border-info shadow">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Exam_Code</th>
                                <th>Class_Code</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {class_exam_tag.length === 0 ?
                                <tr align="center"><td colSpan="5">No Record Found</td></tr> :
                                class_exam_tag.map(
                                    (class_exam_tag, index) => (
                                        <tr key={class_exam_tag.Exam_Code}>
                                            <td>{(recordPerPage * (currentPage - 1)) + index + 1}</td>
                                            <td>{class_exam_tag.Exam_Code}</td>
                                            <td>{class_exam_tag.Class_Code}</td>
                                            
                                            <td><button className="btn btn-outline-danger" onClick={() => { this.deleteByExam_Code(class_exam_tag.Exam_Code) }}>Delete</button>
                                            <Link to={`/UpdateResult/${class_exam_tag.Exam_Code}`} className="btn btn-outline-dark">Edit</Link>
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
export default ClassTagEntry;