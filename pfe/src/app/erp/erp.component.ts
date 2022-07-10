import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-erp',
  templateUrl: './erp.component.html',
  styleUrls: ['./erp.component.css']
})
export class ErpComponent implements OnInit {


  data  = {
    price : "0.10$",
    name : "ERP",
    p1 :"The evolution of his business is the goal of each manager and the taking in hand of all that relates to the activity of the company and its management becomes difficult towards impossible according to its size."
  }
  constructor() {

   }
  token:any
  ngOnInit(): void {
    this.token = localStorage.getItem("token")
  }

  checks = false
  isChecked(event : any){
    if(event.target.checked == true){
      this.checks = true
      console.log(this.data)
    }

  }
}
