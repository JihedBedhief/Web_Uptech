import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable ,throwError } from 'rxjs';
import { services } from '../models/services.model';
const url_services='http://localhost:3000/api/services';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http: HttpClient) { }

  addServices(data: FormData){
    return this.http.post<any>(url_services + '/add',data);
  }


  getAllServices():Observable<services[]>{
    return this.http.get<any>(url_services + '/getall');
  }
  
  
getITServices(): Observable<services[]> {
  return this.http.get<services[]>(url_services +'/filter/IT_SYSTEM')
}

getDEVServices(): Observable<services[]> {
  return this.http.get<services[]>(url_services +'/filter/DEV')
}
getMarketingServices(): Observable<services[]> {
  return this.http.get<services[]>(url_services +'/filter/Marketing')
}
  deleteServices(id : any){
    return this.http.delete( url_services + '/delete' +`/${id}`);
  }

  getServiceById(id : any){
    return this.http.get( url_services + '/get' +`/${id}`);
  }
  
  // getServices(name : any){
  //   return this.http.get( url_services + '/getService' +`/${name}`);
  // }

  updateService(id:any,data:any){
    return this.http.put( url_services + "/update"+`/${id}`,data);
  }


}
