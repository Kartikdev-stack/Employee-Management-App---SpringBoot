import React, { Component, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EmployeeService from "../services/EmployeeService";
import ViewEmployeeComponent from './ViewEmployeeComponent';

function ListEmployeeComponent() {
  // defining the hooks
  const [employees, setEmployees] = useState([]);
  const [deleted, setDeleted]=useState(false);
  const [selectedEmployee,setSelectedEmployee]=useState(null);
  const navigate = useNavigate();


  useEffect(() => {
    EmployeeService.getEmployees().then((res) => {
      console.log(res);
      setEmployees(res.data);
      setDeleted(false);
    });
  }, [deleted]);

  const editEmployee=(id)=>{
      console.log(id);
      navigate(`/update-employee/${id}`);
  }


  const addEmployee = () => {
    navigate('/add-employee');
  }

  const viewEmployee=(id)=>{
    
    const employee=employees.find(emp=>emp.id==id);
    setSelectedEmployee(employee);

    // navigate(`/view-employee/${id}`);
  }

  const deleteEmployee = (id) => {
 


      
        EmployeeService.deleteEmployee(id).then((res)=>{


          console.log("record deleted succesfully");
          setDeleted(true);
          // navigate("/");

              
        }).catch((error)=>[
          console.log("Failed to delete record from db",error)
        ]);


    


  }

  return (
    <div>
      <h2 className='text-center'>Employees List</h2>
      <div className='row'>
        <button className='btn btn-primary' onClick={addEmployee}>Add Employee</button>
      </div>
      <div className='row'>
        <table className='table table-striped table-bordered'>
          <thead>
            <tr>
              <th>Employee First Name</th>
              <th>Employee Last Name</th>
              <th>Employee Email Id</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              employees.map(
                employee => (
                  <tr key={employee.id}>
                    <td>{employee.firstName}</td>
                    <td>{employee.lastName}</td>
                    <td>{employee.emailId}</td>
                    <td>
                        <button onClick={()=>editEmployee(employee.id)} className='btn btn-info'>Update</button>
                        <button style={{marginLeft: "10px"}} onClick={()=>deleteEmployee(employee.id)} className='btn btn-danger'>Delete</button>
                        <button style={{margin: "10px"}} onClick={()=>viewEmployee(employee.id)} className='btn btn-info'>View Details</button>
                    </td>
                  </tr>
                )
              )
            }
          </tbody>
        </table>
      </div>

      {selectedEmployee && (
           <ViewEmployeeComponent employee={selectedEmployee}/>
      )}



    </div>

  );

}

export default ListEmployeeComponent;