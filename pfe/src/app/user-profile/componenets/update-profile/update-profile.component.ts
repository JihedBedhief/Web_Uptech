import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { user } from 'src/app/models/user.model';
import { UserService } from 'src/app/Service/user.service';
import { NotificationService } from 'src/app/Service/notification.service';
import jwtDecode from 'jwt-decode';


@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {
  id:any
  dataRecived : any
  data : any 
  users: user[] = [];
  token : any

  Update =  new FormGroup({
    name: new FormControl('',[Validators.required]),
    FamilyName: new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.required]),
    PhoneNumber: new FormControl('',[Validators.required]),

})

user:user ={
  name:'',
  FamilyName:'',
  PhoneNumber:'',
  email:'',

}



constructor(private userService:UserService , private router : Router , private fb : FormBuilder, private route:ActivatedRoute) {
 
 }

ngOnInit(): void {

  this.token = localStorage.getItem('token');
  this.data = jwtDecode(this.token);
  console.log(this.data)
  this.userService.getUserById(this.data._id).subscribe(res=>{
    this.data=res
    this.user=this.data
  })
  
}

// getUser(){
//   this.userService.getUserById(this.id).subscribe(res=>{
//     this.data=res;
//     this.user=this.data
//     this.Update=this.fb.group({
//       name: [this.user.name],
//       FamilyName: [this.user.FamilyName],
//       PhoneNumber:[this.user.PhoneNumber],
//       email:[this.user.email],
    
//     })
//   })
// }


update(_id:any){
  this.userService.updateUser(_id,this.user).subscribe(res=>{
    this.data=res;
    })
    this.router.navigate(['/user_profile'])
    .then(() => {
      window.location.reload();
    });
  }

}
