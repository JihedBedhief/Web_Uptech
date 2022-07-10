import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../Service/services.service';
import { ActivatedRoute, Router } from '@angular/router';
import { services } from '../models/services.model';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
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


  public IT: services[] = [];

  checks = false
  isChecked(event : any , _id){
    if(event.target.checked == true){
      this.servicesServices.getServiceById(_id).subscribe((data: services)=>{
        this.service = data;
        this.checks = true
        this.service.ischecked = true
        this.IT.push(this.service)
        localStorage.setItem('services', JSON.stringify(this.IT));
        var pi2 = JSON.parse(localStorage.getItem('services'));
        console.log(pi2);
        console.log(this.service);
        console.log(this.IT);
      })
    }
    else{
      this.IT.pop();
      console.log(this.IT);
     
    }
    
  }


  constructor(private servicesServices:ServicesService , private router :Router ,  private route : ActivatedRoute) { 
    this.services = [];
  }

  ngOnInit(): void {
    this.servicesServices.getITServices().subscribe(res =>{
      this.services = res;
      console.log(this.services);
    })
    this.token = localStorage.getItem("token")
  }
  
}
