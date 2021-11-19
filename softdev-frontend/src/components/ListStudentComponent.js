import React, { useState } from 'react'

const ListStudentComponent = () => {

    const [students, setStudents] = useState([])

    return (
        <div className = "container">
            <h2 className = "text-center"> List Students </h2>
            <table className = "table table-bordered table-striped">
                <thead>
                    <th> Student Id </th>
                    <th> Student First Name </th>
                    <th> Student Last Name </th>
                    <th> Student Email Address </th>
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
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ListStudentComponent
