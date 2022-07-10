import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {categorie} from '../models/categorie.model';
import { Observable ,throwError } from 'rxjs';
const url_categorie='http://localhost:3000/api/categorie';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  constructor(private http: HttpClient) { }

addCategorie(data: any):Observable<categorie[]>{
  return  this.http.post<any>(url_categorie + '/add',data);
}

getAllCategorie():Observable<categorie[]>{
  return  this.http.get<any>(url_categorie + '/getall');
}

getCategorieById(id : any){
  return this.http.get( url_categorie + '/get' +`/${id}`);
}

deletecategorie(id : any){
  return this.http.delete( url_categorie + '/delete' +`/${id}`);
}

updateCategorie(id:any,data:any){
  return this.http.patch( url_categorie + "/update"+`/${id}`,data);
}

}
