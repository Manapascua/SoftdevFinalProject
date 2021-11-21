import React, { useState, useEffect} from 'react'
import StudentServices from '../services/StudentServices'
import { Link } from 'react-router-dom'

const ListStudentComponent = () => {

    const [students, setStudents] = useState([])

    useEffect(() => {

        getAllStudents();
    }, [])

    const getAllStudents = () =>{
        StudentServices.getAllStudents().then((response) => {
            setStudents(response.data)
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
    }

    const deleteStudent = (studentId) => {
        StudentServices.deleteStudent(studentId).then((response) =>{
            getAllStudents();
        }).catch(error =>{
            console.log(error);
        })
    }
    return (
        <div className = "container">
            <h2 className = "text-center"> List Students </h2>
            <Link to ="/add-student" className ="btn btn-primary mb-2"> Add Student </Link>
            <table className = "table table-bordered table-striped">
                <thead>
                    <tr>
                    <th> Student Id </th>
                    <th> Student First Name </th>
                    <th> Student Last Name </th>
                    <th> Student Email Address </th>
                    <th> Actions </th>
            
                    </tr>            
                </thead>
                <tbody>
                    {
                        students.map( 
                            student =>
                             <tr key = {student.id}> 
                                <td> {student.id} </td>
                                <td> {student.firstName} </td>
                                <td> {student.lastName} </td>
                                <td> {student.emailId} </td>
                                <td>
                                    <Link className ="btn btn-info" to= {`/edit-student/${student.id}`} >Update</Link>
                                    <button className = "btn btn-danger" onClick = {() => deleteStudent(student.id)}
                                    style = {{marginLeft:"10px"}}>Delete</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ListStudentComponent
