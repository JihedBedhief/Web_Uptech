import { Injectable } from '@angular/core';
import {user} from '../models/user.model';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { map, Observable ,throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { JwtHelperService } from "@auth0/angular-jwt";

//import { url } from 'inspector';
const url_user='http://localhost:3000/api/';
const url_userr='http://localhost:3000/api/auth';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};




@Injectable({
  providedIn: 'root'
})



export class UserService {

// token : any

  user:user ={
    email:'',
    password:'',
    name:'',
    FamilyName:'',
    PhoneNumber:'',
    confirmPassword:'',
    isAdmin:false,
    decision:'',

  }
  static GetToken: any;

  constructor(private http: HttpClient) { 
  }
  helper = new JwtHelperService();

  register(data: any):Observable<user[]>{
    return  this.http.post<any>(url_user+"users",data);
}

  login(data: any):Observable<any>{
    return this.http.post<any>(url_userr,JSON.stringify(data),httpOptions)
    
}


IsLoggedIn(){
  return localStorage.getItem('token')!=null;
}


GetToken(){
  return localStorage.getItem('token')||'';
}

HaveAccess(){
  var logintoken=localStorage.getItem('token')||'';
  var _extractedtoken=logintoken.split('.')[1];
  var _atobdata=atob(_extractedtoken);
  var _finaldata=JSON.parse(_atobdata);
  if(_finaldata.isAdmin==true){
    return true
  }else{
    alert('you not having access');
    return false
  }
}





getAllUserAccepted(): Observable<user[]> {
  return this.http.get<user[]>(url_user+'users/AcceptedRequest').pipe(retry(1), catchError(this.handleError))
}

getAllUserRefused(): Observable<user[]> {
  return this.http.get<user[]>(url_user+'users/RefusedRequest').pipe(retry(1), catchError(this.handleError))
}

getAllUserArchived(): Observable<user[]> {
  return this.http.get<user[]>(url_user+'users/arrchivedUser')
}

  getAllRequest(): Observable<user[]> {
    return this.http.get<user[]>(url_user+'users/request')
}

  deleteUser(id : any){
    return this.http.delete( url_user + 'users/delete' +`/${id}`);
}

// updateUser(id: any): Observable<user> {
//   return this.http
//     .put<user>(
//       url_user+'users/updateUser' + `/${id}`,
//       JSON.stringify(user),
//     );
// }

//updateUser(id: any, user: any): Observable<user> {
//return this.http
  // .put<user>(
  //   url_user+'users/updateUser' + `/${id}`,
  //     JSON.stringify(user),
  //   )
    // .pipe(retry(1), catchError(this.handleError));
// }
updateUser(id:any,data:any){
  return this.http.put(url_user + "users/updateUser"+`/${id}`,data);
  
}

archiveUser(id: any): Observable<user> {
  return this.http
    .patch<user>(
      url_user+'users/arrchive' + `/${id}`,
      JSON.stringify(user),
    );
}

disArchiveUser(id: any): Observable<user> {
  return this.http
    .patch<user>(
      url_user+'users/disarchiver' + `/${id}`,
      JSON.stringify(user),
    );
}

 /* getUserById(id : any){
    return this.http.get( url_user + 'users/get' +`/${id}`);
}
*/

getUserById(id:any){
  return this.http.get( url_user + 'users/get'+`/${id}`);
}
  getUserInfo(){
    return this.http.get( url_user + 'users/profile').pipe(
      map((user : user) => user));
  }



  acceptUser(id: any): Observable<user> {
    return this.http
      .patch<user>(
        url_user+'users/accept' + `/${id}`,
        JSON.stringify(user),
      );
}

  refuseUser(id: any): Observable<user> {
    return this.http
      .patch<user>(
        url_user+'users/refuse' + `/${id}`,
        JSON.stringify(user),
      );
}








private handleError(error: HttpErrorResponse) {
  let errorMessage = '';
  if (error.status === 0) {
    // A client-side or network error occurred. Handle it accordingly.
    console.error('An error occurred:', error.error);
  } else {
    // The backend returned an unsuccessful response code.
    // The response body may contain clues as to what went wrong.
    console.error(
      errorMessage= `Backend returned code ${error.status}, body was: `, error.error);
  }
  // Return an observable with a user-facing error message.
  errorMessage+= ' Something bad happened; please try again later.';
  return throwError(() => new Error(errorMessage));
}

// handleError(error:any) {
//   let errorMessage = '';
//   if (error.error instanceof ErrorEvent) {
//     // client-side error
//     errorMessage = `Error: ${error.error.message}`;
//   } else {
//     // server-side error
//     errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
//   }
//   console.log(errorMessage);
//   return throwError(() => {
//       return errorMessage;
//   });
// }

// getAllUser(){
//   return this.http.get<any>("http://localhost:3000/api/users")
//   .pipe(map((res:any)=>{
//     return res;
//   }))
// }
}
