import { Injectable } from '@angular/core';
import {recruitment} from '../models/recruitment.model';
import { HttpClient } from '@angular/common/http';
import { Observable ,throwError } from 'rxjs';
const url_recruitment='http://localhost:3000/api/demandesRec';

@Injectable({
  providedIn: 'root'
})
export class recruitmentService {

  constructor(private http: HttpClient) { }

 
  demander(data: any):Observable<recruitment[]>{
    return  this.http.post<any>(url_recruitment,data);
}


getAllRecReq(): Observable<recruitment[]> {
  return this.http.get<recruitment[]>(url_recruitment)
}


getReqById(id : any){
  return this.http.get( url_recruitment + '/get' +`/${id}`);
}


getRefusedRecReq(): Observable<recruitment[]> {
  return this.http.get<recruitment[]>(url_recruitment + "/RefusedRequest")
}

getAcceptedRecReq(): Observable<recruitment[]> {
  return this.http.get<recruitment[]>(url_recruitment + "/acceptedRequest")
}

deleteRecReq(id : any){
  return this.http.delete( url_recruitment + '/delete' +`/${id}`);
}

acceptRecReq(id: any): Observable<recruitment> {
  return this.http
    .patch<recruitment>(
      url_recruitment+'/accept' + `/${id}`,
      JSON.stringify(recruitment),
    );
}

refuseRecReq(id: any): Observable<recruitment> {
  return this.http
    .patch<recruitment>(
      url_recruitment+'/refuse' + `/${id}`,
      JSON.stringify(recruitment),
    );
}

}
