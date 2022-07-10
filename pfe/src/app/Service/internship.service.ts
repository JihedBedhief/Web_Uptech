import { Injectable } from '@angular/core';
import {internship} from '../models/internship.model';
import { HttpClient, HttpErrorResponse, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable ,throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
const url_internship='http://localhost:3000/api/demandesStage';

@Injectable({ 
  providedIn: 'root'
})
export class internshipService {

  
  private baseUrl = 'http://localhost:3000/uploads';
  constructor(private http: HttpClient) { }

  upload(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();
    formData.append('file', file);
    const req = new HttpRequest('POST', `${this.baseUrl}/uploads\\`, formData, {
      reportProgress: true,
      responseType: 'json',
    });
    return this.http.request(req);
  }

  // getFiles(): Observable<any> {
  //   return this.http.get(`${this.baseUrl}/files`);
  // }

  // getFile(file:any){
  //   return this.http.get(url_internship +'/get/'+`/${file}`)
  // }

  // getImgById(id: string): Observable<any> {
  //   const url = `${url_internship}/${id}`;
  //   return this.http.get<internship>(url).pipe(
  //     catchError(this.handleError)
  //   );
  // }

  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }
 
  
  demander(formData: FormData):Observable<internship[]>{
    return  this.http.post<any>(url_internship,formData);
}

  getAllIntReq(): Observable<internship[]> {
    return this.http.get<internship[]>(url_internship)
}


getRefusedIntReq(): Observable<internship[]> {
  return this.http.get<internship[]>(url_internship + "/RefusedRequest")
}

getAcceptedIntReq(): Observable<internship[]> {
  return this.http.get<internship[]>(url_internship + "/acceptedRequest")
}


deleteInReq(id : any){
  return this.http.delete( url_internship + '/delete' +`/${id}`);
}


  filterL(): Observable<internship[]> {
    return this.http.get<internship[]>(url_internship +"/filter/lisence")
}
  filterM(): Observable<internship[]> {
    return this.http.get<internship[]>(url_internship +"/filter/master")
  }
  filterI(): Observable<internship[]> {
    return this.http.get<internship[]>(url_internship +"/filter/ingineurie")
}


getReqById(id : any){
  return this.http.get( url_internship + '/get' +`/${id}`);
}


acceptInReq(id: any): Observable<internship> {
  return this.http
    .patch<internship>(
      url_internship+'/accept' + `/${id}`,
      JSON.stringify(internship),
    );
}

refuseInReq(id: any): Observable<internship> {
  return this.http
    .patch<internship>(
      url_internship+'/refuse' + `/${id}`,
      JSON.stringify(internship),
    );
}


}
