import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']
})
export class MobileComponent implements OnInit {

  constructor() { }
  token:any
    
  data  = {
    price : "0.10$",
    name : "MOBILE DEVELOPMENT",
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
