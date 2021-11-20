import React, {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom';
import StudentServices from '../services/StudentServices'
import { Link, useParams } from 'react-router-dom';

const AddStudentComponent = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [emailId, setEmailId] = useState('')
    const navigate = useNavigate();
    const {id} = useParams();

    const saveorupdateStudent = (e) => {
        e.preventDefault();

        const student = {firstName, lastName, emailId}

        if(id){
            StudentServices.updateStudentt(id, student).then((response) =>{
                history.push('/students')
            }).catch(error =>{
                console.log(error)
            })

        }else{
            StudentServices.createStudent(student).then((response) =>{
           
                console.log(response.data)
        
                navigate('/students');
        
               }).catch(error => {
                console.log(error)
               })
        }

     
    }
    useEffect(() => {
        StudentServices.getStudentbyId(id).then((response) =>{
            setFirstName(response.data.firstName)
            setLastName(response.data,lastName)
            setEmailId(response.data.emailId)
        }).catch(error => {
            console.log(error)
        })
    }, [])

    
    const title = () => {

        if(id){
            return <h2 className = "text-center"> Update Student</h2>
        }else{
            return <h2 className = "text-center"> Add Student</h2>
        }
    }
    return (
        <div>
          <br/><br/>
            <div className = "container">
                <div className ="row">
                    <div className = "card col-md-5 offset-md-3 offset-md-3"></div>
                        {
                            title()
                        }
                    <div className ="card body">
                        <form>
                            <div className = "form-group mb-2">
                                <label className = "form-label">First Name :</label>
                                <input 
                                    type = "text"
                                    placeholder = "Enter first name"
                                    name = "firstName"
                                    className = "form-control"
                                    value ={firstName}
                                    onChange = {(e) => setFirstName(e.target.value)}
                                    >
                                </input>
                            </div>

                            <div className = "form-group mb-2">
                                <label className = "form-label">Last Name :</label>
                                <input 
                                    type = "text"
                                    placeholder = "Enter last name"
                                    name = "lastName"
                                    className = "form-control"
                                    value ={lastName}
                                    onChange = {(e) => setLastName(e.target.value)}
                                    >
                                </input>
                            </div>
 
                            <div className = "form-group mb-2">
                                <label className = "form-label">Email Id :</label>
                                <input 
                                    type = "email"
                                    placeholder = "Enter email Id"
                                    name = "emailId"
                                    className = "form-control"
                                    value ={emailId}
                                    onChange = {(e) => setEmailId(e.target.value)}
                                    >
                                </input>
                            </div>

                            <button className ="btn btn-success" onClick = {(e) => saveorupdateStudent(e)} >Submit</button>
                            <Link to="/students" className="btn btn-danger"> Cancel </Link>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AddStudentComponent

