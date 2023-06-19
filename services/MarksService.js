import axios from 'axios';
const students_marks_entry_REST_API_URL = 'http://localhost:8080/studentss'
class MarksService{
    getstudents_marks_entry(){
        return axios.get(students_marks_entry_REST_API_URL);
    }
}
export default new MarksService();