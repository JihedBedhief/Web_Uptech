import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../Service/services.service';
import { ActivatedRoute, Router } from '@angular/router';
import { services } from '../models/services.model';

@Component({
  selector: 'app-marketing-services',
  templateUrl: './marketing-services.component.html',
  styleUrls: ['./marketing-services.component.css']
})
export class MarketingServicesComponent implements OnInit {
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
    title:'',
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
    this.servicesServices.getMarketingServices().subscribe(res =>{
      this.services = res;
      console.log(this.services);
    })
    this.token = localStorage.getItem("token")
  }
  
}
