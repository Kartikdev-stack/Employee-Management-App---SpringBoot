import React, { Component, useState } from 'react'
import EmployeeService from '../services/EmployeeService';
import { useNavigate } from 'react-router-dom';

function CreateEmployeeComponent() {
    // defining hooos

    const[firstName,setFirstName]=useState("");
    const[lastName,setLastName]=useState("");
    const[email,setEmail]=useState("");
    const navigate = useNavigate();


    const changeFirstNameHandler=(event)=>{
        console.log(event.target.value);
        setFirstName(event.target.value);
    }

    const changeLastNameHandler=(event)=>{
        console.log(event.target.value);
        setLastName(event.target.value);
    }

    const changeEmailHandler=(event)=>{
        console.log(event.target.value);
        setEmail(event.target.value);
    }

    const saveEmployee=(e)=>{
        e.preventDefault();
        let employee={firstName:firstName,lastName:lastName,emailId:email};
        console.log("Employee details: "+JSON.stringify(employee));
        EmployeeService.createEmployee(employee).then((res)=>{
                console.log("Record created")
                if(res.status=200)
                 navigate("/");
                else
                 alert("Unable to add ypur record !")
            
        });

        
    }

    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='card col-md-6 offset-md-3 offset-md-3'></div>
                        <h3 className='text-center'>Add Employee</h3>
                        <div className='card-body'>
                            <form>
                                {/* First Name */}
                                <div className='form-group'>
                                    <label>First Name: </label>
                                    <input placeholder='First Name' name='firstname' className='form-control' value={firstName} onChange={changeFirstNameHandler}></input>
                                </div>

                                {/* Last Name */}
                                <div className='form-group'>
                                    <label>Last Name: </label>
                                    <input placeholder='Last Name' name='lastname' className='form-control' value={lastName} onChange={changeLastNameHandler}></input>
                                </div>

                                {/* Email Id */}
                                <div className='form-group'>
                                    <label>Email Id: </label>
                                    <input placeholder='Email Id' name='email' className='form-control' value={email} onChange={changeEmailHandler}></input>
                                </div>

                                <button className='btn btn-success' onClick={saveEmployee}>Save</button>
                                {/* make and fix the cancel button below  later */}
                                {/* <button className='btn btn-danger' onClick={} style={{marginLeft:  "10px"}}>Cancel</button> */}  

                            </form>
                        </div>

                </div>
            </div>
        </div>
    )
}

export default CreateEmployeeComponent
