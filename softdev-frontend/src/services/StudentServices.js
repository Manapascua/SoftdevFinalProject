import axios from 'axios'

const STUDENTS_BASE_REST_API_URL = 'http://localhost:8080/api/v1/students';

class StudentService {
    getAllStudents(){
        return axios.get(STUDENTS_BASE_REST_API_URL)
    }

    createStudent(student){
        return axios.post(STUDENTS_BASE_REST_API_URL, student )
    }

    getStudentbyId(studentId){
        return axios.get(STUDENTS_BASE_REST_API_URL + '/' + studentId);
    }

    updateStudent(studentId, student){
        return axios.put(STUDENTS_BASE_REST_API_URL + '/' + studentId, student);
    }
}

export default new StudentService();