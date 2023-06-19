import axios from 'axios';
const set_exam_information_REST_API_URL = 'http://localhost:8080/exams'
class InfoService{
    getprocess_result(){
        return axios.get(set_exam_information_REST_API_URL);
    }
}
export default new InfoService();