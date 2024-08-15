import React, { useState } from 'react';
import EmployeeService from '../services/EmployeeService';
import { useNavigate, useParams } from 'react-router-dom';
import ListEmployeeComponent from './ListEmployeeComponent';

function UpdateEmployeeComponent() {
    const { id: employeeId } = useParams();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    const changeFirstNameHandler = (event) => {
        setFirstName(event.target.value);
    };

    const changeLastNameHandler = (event) => {
        setLastName(event.target.value);
    };

    const changeEmailHandler = (event) => {
        setEmail(event.target.value);
    };

    const editEmployee = (e) => {
        e.preventDefault();
        console.log("Attempting to update employee with ID:", employeeId);

        EmployeeService.getEmployeeById(employeeId).then((res) => {
            let employee = res.data; // this is the emplpyee which is retrived from backend server to be updted
            console.log(employee);
            employee.firstName = firstName;
            employee.lastName = lastName;
            employee.emailId = email;

            console.log(employee);

            // now we update in the database the new values

            EmployeeService.updateEmployee(employee,employeeId).then((res) => {
                // after successful udpdation go back to home page
                  navigate("/");

            }).catch((error) => {
                console.log("Failed to update database ", employeeId)
            })





        }).catch((error) => {
            console.log("Failed to update employee ", employeeId)
        })


    };

    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='card col-md-6 offset-md-3 offset-md-3'>
                        <h3 className='text-center'>Update Employee</h3>
                        <div className='card-body'>
                            <form>
                                <div className='form-group'>
                                    <label>First Name: </label>
                                    <input placeholder='First Name' name='firstname' className='form-control' value={firstName} onChange={changeFirstNameHandler} />
                                </div>
                                <div className='form-group'>
                                    <label>Last Name: </label>
                                    <input placeholder='Last Name' name='lastname' className='form-control' value={lastName} onChange={changeLastNameHandler} />
                                </div>
                                <div className='form-group'>
                                    <label>Email Id: </label>
                                    <input placeholder='Email Id' name='email' className='form-control' value={email} onChange={changeEmailHandler} />
                                </div>
                                <button className='btn btn-success' onClick={editEmployee}>Update</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UpdateEmployeeComponent;
