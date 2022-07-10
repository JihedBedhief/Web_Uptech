import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobile-marketing',
  templateUrl: './mobile-marketing.component.html',
  styleUrls: ['./mobile-marketing.component.css']
})
export class MobileMarketingComponent implements OnInit {

  constructor() { }
  token:any
    
  data  = {
    price : "0.10$",
    name : "MOBILE MARKETING",
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
