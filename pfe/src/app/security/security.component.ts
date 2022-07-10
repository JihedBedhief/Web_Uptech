import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.css']
})
export class SecurityComponent implements OnInit {

  constructor() { }
  token:any
    
  data  = {
    price : "0.10$",
    name : "SECURITY",
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
