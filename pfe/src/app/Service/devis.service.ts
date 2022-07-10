import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { devis } from '../models/devis.model';
const url_devis='http://localhost:3000/api/devis/';

@Injectable({
  providedIn: 'root'
})
export class DevisService {

  constructor(private http: HttpClient) { }


  getAllDevis(): Observable<devis[]> {
    return this.http.get<devis[]>(url_devis + "allDevis")
}

deleteDevis(id : any){
  return this.http.delete( url_devis+ "/delete" +`/${id}`);
}

}
