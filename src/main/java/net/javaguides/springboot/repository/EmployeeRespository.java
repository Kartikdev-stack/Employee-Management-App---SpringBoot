package net.javaguides.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import net.javaguides.springboot.model.Employee;



 //    JpaRepository provides JPA-related methods for standard CRUD (Create, Read, Update, Delete) operations and more.


@Repository
public interface EmployeeRespository extends JpaRepository<Employee, Long>{

}

// respository is a special label we put on an interface to tell Spring that this is a repository and it is meant to manage data (CRUD) in database.
//JpaRepository<Employee,Long> is  super storage manager that aldready knows how to do basic stuff and it is provided with two things, firstly iy will mnage obhjects of 
// of type Employee and dataa typeof identifiier is Long

// EmployeeRepository is like a ready-made tool that you can use to manage Employee data in the database. It  gives it all the necessary powers to do that, so you don’t need to write the basic database management code yourself.