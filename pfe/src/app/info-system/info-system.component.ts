import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-system',
  templateUrl: './info-system.component.html',
  styleUrls: ['./info-system.component.css']
})
export class InfoSystemComponent implements OnInit {

  constructor() { }
  token:any

  data  = {
    price : "0.10$",
    name : "INFORMATION SYSTEM",
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
