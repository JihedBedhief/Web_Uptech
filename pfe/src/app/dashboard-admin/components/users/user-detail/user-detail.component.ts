import { Component, OnInit } from '@angular/core';
import { UserService } from "../../../../Service/user.service";
import {user} from '../../../../models/user.model'
import { ActivatedRoute, Router } from '@angular/router';
import jwtDecode from 'jwt-decode';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
public users: user[] = [];

_id : any 
token: any 
data : any 
imgDirectoryPath : any = "http://localhost:3000/uploads/"

user:user ={
  email:'',
  password:'',
  name:'',
  FamilyName:'',
  PhoneNumber:'',
  confirmPassword:'',
  isAdmin:false,
  decision:'',
  isArchived:false,

}

  constructor(private userService:UserService , private router :Router , private route : ActivatedRoute) {
    this.users = [];
   }
  
  ngOnInit(): void {
    // this.token = localStorage.getItem('access_token');
    // this.user = jwtDecode(this.token);
    this._id = this.route.snapshot.params['userId'];
    this.userService.getUserById(this._id).subscribe((data: user)=>{
      this.user = data;
      console.log( 'famaaaa user = ',this.user);
    });
  }
}
