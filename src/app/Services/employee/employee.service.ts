import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core"; 
import { Observable } from "rxjs";
import { catchError, ReplaySubject, throwError } from 'rxjs';

@Injectable()

export class EmployeeService{

    // employeeList:any[] = [
    //     {FirstName:'Suyog',MiddleName:'Gopal',LastName:'Vyas',age:22,gender:'male',Details:['view','edit','delete']},
    //     {FirstName:'Aman',MiddleName:'Shiv',LastName:'Sahu',age:22,gender:'male',Details:['view','edit','delete']},
    //     {FirstName:'Mitesh',MiddleName:'Gopal',LastName:'Sakalkar',age:22,gender:'male',Details:['view','edit','delete']},
    //     {FirstName:'Chinmay',MiddleName:'Prashant',LastName:'Deshkar',age:22,gender:'male',Details:['view','edit','delete']},
    //     {FirstName:'Viplav',MiddleName:'Nitin',LastName:'Khode',age:22,gender:'male',Details:['view','edit','delete']},
    //     {FirstName:'Sanket',MiddleName:'Sanjay',LastName:'Bhageria',age:22,gender:'male',Details:['view','edit','delete']},
    // ]

    employeeList:any
    constructor(private _http:HttpClient){}

    employeeUrl:string = 'api/employeeList';

    getEmpByApi():Observable<any[]>{
        return this._http.get<any[]>(this.employeeUrl).pipe(catchError(this.handleError))
    }
    

    // getEmployeeData(){
    //     return this.employeeList;
    // }

    getSelectedData(name:string|null)
    {
       let subject = new ReplaySubject()
       this._http.get<any>(this.employeeUrl).subscribe((data)=>{
            this.employeeList = data.find((x: { FirstName: string | null; })=>x.FirstName == name)
            console.log("employee"+ this.employeeList)
            subject.next(this.employeeList)
            subject.complete();
       })
       return subject
    }

    // getSelectedData(name:string|null)
    // {
        
    //     this.getEmpByApi().subscribe((empdata) => {
    //         this.employeeList = empdata;
    //     })
    //     console.log("services getselectdata func "+this.employeeList)
    //    return this.employeeList.filter((e: { FirstName: string | null; })=>e.FirstName == name);
       
    // }

       
    

    private handleError(errorResponse:HttpErrorResponse){
        console.log(errorResponse);
       
       if(errorResponse.error  instanceof ErrorEvent)
       {
           console.log(errorResponse.message);
           // Client side error
       }
       else
       {
           console.log(errorResponse.message);
           // server side
       }
       
     return throwError(()=>{
       return 'Something wrong occur!!';
     });
}}