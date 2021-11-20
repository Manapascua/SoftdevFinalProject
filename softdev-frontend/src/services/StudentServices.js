import axios from 'axios'

const STUDENTS_BASE_REST_API_URL = 'http://localhost:8080/api/v1/students';

class StudentService {
    getAllStudents(){
        return axios.get(STUDENTS_BASE_REST_API_URL)
    }
}

export default new StudentService();