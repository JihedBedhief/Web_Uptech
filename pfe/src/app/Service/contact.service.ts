import { Injectable } from '@angular/core';
import {contact} from '../models/contact.model';
import { HttpClient } from '@angular/common/http';
import { Observable ,throwError } from 'rxjs';
const url_contact='http://localhost:3000/api/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {


  constructor(private http: HttpClient) { }

  contacter(data: any):Observable<contact[]>{
    return  this.http.post<any>(url_contact,data);
}

  getAllContacts(): Observable<contact[]> {
    return this.http.get<contact[]>(url_contact)
}

  deleteContact(id : any){
    return this.http.delete( url_contact +`/${id}`);
}
}
