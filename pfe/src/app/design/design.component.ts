import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.css']
})
export class DesignComponent implements OnInit {

  constructor() { }
  token:any

  data  = {
    price : "0.10$",
    name : "DESIGN",
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
