import axios from 'axios';
const process_result_REST_API_URL = 'http://localhost:8080/results'
class ResultService{
    getprocess_result(){
        return axios.get(process_result_REST_API_URL);
    }
}
export default new ResultService();