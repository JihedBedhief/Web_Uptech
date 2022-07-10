import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-web',
  templateUrl: './web.component.html',
  styleUrls: ['./web.component.css']
})
export class WebComponent implements OnInit {

  constructor() { }
  token:any
    
  data  = {
    price : "0.10$",
    name : "WEB DEVELOPMENT",
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
