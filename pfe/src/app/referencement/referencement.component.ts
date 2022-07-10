import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-referencement',
  templateUrl: './referencement.component.html',
  styleUrls: ['./referencement.component.css']
})
export class ReferencementComponent implements OnInit {

  constructor() { }
  token:any
    
  data  = {
    price : "0.10$",
    name : "REFERNCEMENT",
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
