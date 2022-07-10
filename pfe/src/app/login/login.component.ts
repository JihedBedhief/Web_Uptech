import { Component, OnInit } from '@angular/core';
import { FormBuilder ,FormGroup,FormControl, Validators } from '@angular/forms';
import { UserService } from "../Service/user.service";
import {user} from '../models/user.model'
import { ActivatedRoute, Router } from '@angular/router';
import jwtDecode from 'jwt-decode';

//import { TokenStorageServiceService } from '../Service/token-storage-service.service';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  messageclass = ''
  message = ''
  Customerid: any;
  editdata: any;
  responsedata: any;


  Login =  new FormGroup({
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl(  '',[ Validators.required])
  })


  dataRecived : any
  data : any 
  token : any
  errorMessage:any

  user:any ={
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

  // isLoggedIn = false;
  // isLoginFailed = false;
  // errorMessage = '';
  // roles: string[] = [];



  constructor(private userService:UserService , private router :Router ) { 
    localStorage.clear()      
  }
  

  ngOnInit(): void {

  }

  

//   login(){
//     const data = {
//       email:this.user.email,
//       password:this.user.password,
//     };
//     this.userService.login(data).subscribe((response) => {

//     this.dataRecived = response.user;
//     console.log(this.dataRecived);
//     this.token=localStorage.setItem("token",response.token)
//     this.data=localStorage.setItem("user",JSON.stringify(this.dataRecived))
//     //this.token=localStorage.getItem("token")

//     if(this.dataRecived.isAdmin==true){
//       this.router.navigate(['/admin'])
//     }

//     // if (this.data.decision == "pending"){
//     //   window.alert("your not accepted yet ")
//     // }
//     else
//       this.router.navigate(['/user_profile'])
//       },
//       err => {
//         console.log(err)
//         window.alert("femma mochkla fil front xD *_*")
//       }
    
//     )

// };

login() {
  if (this.Login.valid) {
    this.userService.login(this.Login.value).subscribe(response => {
      console.log({response});
      
      if(response.success===true){
        this.responsedata=response.data;
        this.dataRecived = response.data.user;
        if(this.dataRecived.isAdmin==true){
          this.router.navigate(['/admin'])
          .then(() => {
            window.location.reload();
          });
          this.token=localStorage.setItem("token",response.data.token)
          this.data=localStorage.setItem("user",JSON.stringify(this.dataRecived))
        }
          else{
          this.token=localStorage.setItem("token",response.data.token)
          this.data=localStorage.setItem("user",JSON.stringify(this.dataRecived))
          this.router.navigate(['/user_profile'])
          .then(() => {
            window.location.reload();
          });
          }
        
      }else{
        console.log(response.message)
      }
    },(error)=>{
      this.errorMessage=error;
      alert(error.error.message)
        });
  }
}




}

