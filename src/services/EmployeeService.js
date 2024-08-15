import axios from "axios";

const EMPLOYEE_API_BASE_URL="http://localhost:8080/api/v1/employees";

class EmployeeService{


    // the frontend APIs will hit the backend which retrives value from DB to carry out get req
    getEmployees(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }

    // post req to make changes in DB

    createEmployee(employee){
        return axios.post(EMPLOYEE_API_BASE_URL,employee);
    }

    // get employee by id

    getEmployeeById(employee_id){
        return axios.get(EMPLOYEE_API_BASE_URL+'/'+employee_id);

    }

    // update employee by Id

    updateEmployee(employee,employee_id){
        return axios.put(EMPLOYEE_API_BASE_URL+'/'+employee_id,employee);
    }


    // delete employee by id

    deleteEmployee(employee_id){
        return axios.delete(EMPLOYEE_API_BASE_URL+'/'+employee_id);
    }
    

    // }

}

export default new EmployeeService()