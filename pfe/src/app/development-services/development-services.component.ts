import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../Service/services.service';
import { ActivatedRoute, Router } from '@angular/router';
import { services } from '../models/services.model';

@Component({
  selector: 'app-development-services',
  templateUrl: './development-services.component.html',
  styleUrls: ['./development-services.component.css']
})
export class DevelopmentServicesComponent implements OnInit {
  token:any
  public services: services[] = [];
  data : any
  _id : any
  imgDirectoryPath : any = "http://localhost:3000/uploads/"

  service:services ={
    name:'',
    descreption:'',
    prix:'',
    categorie:'',
    title : '', 
    ischecked:false,
  }


  public DEV: services[] = [];

  checks = false
  isChecked(event : any , _id){
    if(event.target.checked == true){
      this.servicesServices.getServiceById(_id).subscribe((data: services)=>{
        this.service = data;
        this.checks = true
        this.DEV.push(this.service)
        console.log(this.service);
        console.log(this.DEV);
        localStorage.setItem('services', JSON.stringify(this.DEV));
        var pi2 = JSON.parse(localStorage.getItem('services'));
        console.log(pi2);
       
      })
    }
    else{
      this.DEV.pop()
      console.log(this.DEV);
     
    }
  }


  constructor(private servicesServices:ServicesService , private router :Router ,  private route : ActivatedRoute) { 
    this.services = [];
  }

  ngOnInit(): void {
    this.servicesServices.getDEVServices().subscribe(res =>{
      this.services = res;
      console.log(this.services);
    })
    this.token = localStorage.getItem("token")
  }
  
}
