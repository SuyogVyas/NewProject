import { Injectable } from "@angular/core"; 

@Injectable()

export class EmployeeService{

    employeeList:any[] = [
        {FirstName:'Suyog',MiddleName:'Gopal',LastName:'Vyas',age:22,gender:'male',Details:['view','edit','delete']},
        {FirstName:'Aman',MiddleName:'Shiv',LastName:'Sahu',age:22,gender:'male',Details:['view','edit','delete']},
        {FirstName:'Mitesh',MiddleName:'Gopal',LastName:'Sakalkar',age:22,gender:'male',Details:['view','edit','delete']},
        {FirstName:'Chinmay',MiddleName:'Prashant',LastName:'Deshkar',age:22,gender:'male',Details:['view','edit','delete']},
        {FirstName:'Viplav',MiddleName:'Nitin',LastName:'Khode',age:22,gender:'male',Details:['view','edit','delete']},
        {FirstName:'Sanket',MiddleName:'Sanjay',LastName:'Bhageria',age:22,gender:'male',Details:['view','edit','delete']},

    ]
    
    getEmployeeData(){
        return this.employeeList;
    }

    getSelectedData(name:string|null)
    {
       return this.employeeList.filter(e=>e.FirstName == name);
       
    }
}