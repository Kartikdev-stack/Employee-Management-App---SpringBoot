package net.javaguides.springboot.controller;

import java.util.List;

import org.hibernate.Remove;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.persistence.PostUpdate;
import net.javaguides.springboot.exception.ResourceNotFoundException;
import net.javaguides.springboot.model.Employee;
import net.javaguides.springboot.repository.EmployeeRespository;


@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class EmployeeController {
	
	
	 @Autowired
     private EmployeeRespository employeeRepository;
     
     // get all employees
    
     @GetMapping("/employees")
     public List<Employee> getAllEmployees(){
    	 return employeeRepository.findAll();
     }
     
    //creating employee rest api
     
     @PostMapping("/employees")     
     public Employee createEmployee(@RequestBody Employee employee) {
		return employeeRepository.save(employee);
    	 
     }
     // Request Body basically helps us to convert json data into transferring object / eployee in this case so we can avoid writing boilerplate code and spring aut
    
     @GetMapping("/employees/{id}")   
    public ResponseEntity<Employee> getEmployeeById(@PathVariable Long id) {
    	Employee employee=employeeRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("Employee does not exist with id: "+ id));
    	return ResponseEntity.ok(employee);
    }
     
     // update employee by id rest api
     // PostMapping is used to req a particular url when a post request is called and that would execute the method it is attached to
    
    @PutMapping("/employees/{id}")
    public ResponseEntity<Employee> updateEmployeeById(@PathVariable Long id, @RequestBody Employee employeeDetails){
    	Employee employee = employeeRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("Employee does not exist with id: "+ id));
    	        
    	        // updating the employee object with the new values from method
    	        employee.setFirstName(employeeDetails.getFirstName());
    	        employee.setLastName(employeeDetails.getLastName());
             	employee.setEmailId(employeeDetails.getEmailId());
  
             	// save the updates
			employeeRepository.save(employeeDetails);
			
			
    	return ResponseEntity.ok(employee);
    }
     // path variable is used to retrive value from the url..in the above case it is the id
    // Request body is used to  convert JSON to java object
    
    
    // deleting a record by id
    
    @DeleteMapping("/employees/{id}")
    public List<Employee> deleteEmployeeById(@PathVariable Long id){
    	employeeRepository.deleteById(id);
    	return employeeRepository.findAll();
    }
    
    
}
