import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { user } from '../models/user.model';
import { UserService } from "../Service/user.service";
import { Subscription } from 'rxjs';
import { LoginComponent } from '../login/login.component';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
 
  id:any
  dataRecived : any
  data : any 
  imgDirectoryPath : any = "http://localhost:3000/uploads/"

  public parts: String[] = [];
  user:user ={
    email:'',
    name:'',
    FamilyName:'',
    PhoneNumber:'',
    file:'',
  }

  token: any;

  constructor(private userService:UserService , private router :Router, private route : ActivatedRoute ) { }
 
 


  ngOnInit(): void {

    this.token = localStorage.getItem('token');
    this.data = jwtDecode(this.token);
    console.log(this.data)
    this.userService.getUserById(this.data._id).subscribe(res=>{
      this.data=res
      this.user=this.data
      console.log(this.user.file)
    })
  
}


// getUser(){
//   this.userService.getUserById(this.id).subscribe(res=>{
//     this.data=res
//     this.user=this.data
//   })
// }

update(id : any , data : any){

  this.dataRecived=localStorage.getItem("user")
  this.user = JSON.parse(this.dataRecived)
  console.log(this.user)
  this.userService.updateUser(id,data).subscribe((res)=>{
    this.router.navigate(['/user_profile']) 
    .then(() => {
      window.location.reload();
    });
    console.log("res", res)
  })
}

}
