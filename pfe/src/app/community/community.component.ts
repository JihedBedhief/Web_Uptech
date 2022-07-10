import { Component, OnInit } from '@angular/core';
import { UserService } from "../Service/user.service";
import {user} from '../models/user.model'
import { Router } from '@angular/router';
@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.css']
})
export class CommunityComponent implements OnInit {

  constructor(private userService:UserService , private router :Router) { }
  tokenC:any

  data  = {
    price : "0.10$",
    name : "COMMUNITY MANAGEMENT",
  }  
  
  checks = false
  isChecked(event : any){
    if(event.target.checked == true){
      this.checks = true
      console.log(this.data)
    }

  }
  ngOnInit(): void {
    this.tokenC = localStorage.getItem("token")
  }

}
