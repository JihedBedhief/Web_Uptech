import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { user } from 'src/app/models/user.model';
import { UserService } from 'src/app/Service/user.service';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent implements OnInit {
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
      console.log(this.user.email)
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
