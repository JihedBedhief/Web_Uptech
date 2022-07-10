import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { services } from '../models/services.model';
import { ServicesService } from '../Service/services.service';

@Component({
  selector: 'app-cloud',
  templateUrl: './cloud.component.html',
  styleUrls: ['./cloud.component.css']
})
export class CloudComponent implements OnInit {

  constructor(private servicesServices:ServicesService , private router :Router , private route : ActivatedRoute) { 
    this.services = [];
  }

  public selected: string[] = [];
  public services: services[] = [];

  name :any

  token : any
  data  = {
    price : "0.10$",
    name : "CLOUD",
  }  
  
  service:services = {
    name:'',
    descreption:'',
    prix:'',
    categorie:'',
  }

  checks = false
  isChecked(event : any){
    if(event.target.checked == true){
      this.checks = true
      console.log(this.data)
    }

  }


  ngOnInit(): void {
    this.token = localStorage.getItem("token")
  }

  
}
