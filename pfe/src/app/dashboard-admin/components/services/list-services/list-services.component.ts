import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { services } from 'src/app/models/services.model';

import { ServicesService } from 'src/app/Service/services.service';


@Component({
  selector: 'app-list-services',
  templateUrl: './list-services.component.html',
  styleUrls: ['./list-services.component.css']
})
export class ListServicesComponent implements OnInit {

  public services: services[] = [];

  data:any


  constructor(private servicesServices:ServicesService , private router :Router) { 
    this.services = [];
  }

  ngOnInit(): void {
    this.servicesServices.getAllServices().subscribe(res =>{
      this.services = res;
      console.log(this.services);
    })
  }

 
  deleteServices(id : any){
    if(confirm("are you sure you want to delete this service ?? ")){
    this.servicesServices.deleteServices(id).subscribe((res)=>{
      this.router.navigate(['/admin/liste_services'])
      .then(() => {
        window.location.reload();
      });
      console.log("res", res)
    })
  }
  }

//   getUserById(id : any){
//     this.userService.getUserById(id).subscribe(res =>{
//       this.router.navigate(['/admin/user_detail'])
//       console.log(this.users);
//     })
// }



}
