package net.javaguides.springboot.model;


//  JPA (Java Persistence APIs) packages that are used to map an entity to a class or field.
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="employees")

public class Employee {
	
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
	private long id;
    
    @Column(name="first_name")
	private String firstName;
    @Column(name="last_name")
	private String lastName;
    @Column(name="email_id")
	private String emailId;
	
	
//     a default constructor is mandatory for JPA. In simpple terms, it is neccessary for class to function properly with JPA
    
	public Employee() {
		
	}
	
	
	
	public Employee(String firstName, String lastName, String emailId) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.emailId = emailId;
	}

	public long getId() {
		return id;
	}
	
	public void setId(long id) {
		this.id = id;
	}
	
	public String getFirstName() {
		return firstName;
	}
	
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	
	public String getLastName() {
		return lastName;
	}
	
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	
	public String getEmailId() {
		return emailId;
	}
	
	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}
	
	
//	Explaination: 
//	Marking a class as a JPA entity means that you're telling the Java Persistence API (JPA) that this particular class should be mapped to a table in a relational database. When a class is marked as an entity, JPA can manage the class and its objects in the context of database operations like storing, retrieving, updating, and deleting data.
	

}
