import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-infrastructure',
  templateUrl: './infrastructure.component.html',
  styleUrls: ['./infrastructure.component.css']
})
export class InfrastructureComponent implements OnInit {

  constructor() { }
  token:any
  
  data  = {
    price : "0.10$",
    name : "INFRASTRUCTURE",
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
