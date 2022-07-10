import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-email-marketing',
  templateUrl: './email-marketing.component.html',
  styleUrls: ['./email-marketing.component.css']
})
export class EmailMarketingComponent implements OnInit {

  constructor() { }
  token:any

  data  = {
    price : "0.10$",
    name : "E-MAIL MARKETING",
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
