import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { user } from '../models/user.model';
import { UserService } from '../Service/user.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private router:Router , private userService :UserService ) {  }
   token:any
   isLogin = false;
   data :any
   imgDirectoryPath : any = "http://localhost:3000/uploads/"

  ngOnInit(): void {
    this.token = localStorage.getItem("token")
    if(this.token == null){
      this.isLogin=false
    }else{
      this.isLogin=true
    }
    
    this.token = localStorage.getItem('token');
    this.data = jwtDecode(this.token);
    console.log(this.data)
    this.userService.getUserById(this.data._id).subscribe(res=>{
      this.data=res
      this.user=this.data
      console.log(this.user.file)
    })
  }
  user:user ={
    email:'',
    name:'',
    FamilyName:'',
    PhoneNumber:'',
    file:'',
  }


  logout(){
    this.router.navigate(['/login'])
    .then(() => {
      window.location.reload();
    });
  }

}
