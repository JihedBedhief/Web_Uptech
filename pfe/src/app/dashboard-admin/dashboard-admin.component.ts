import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { user } from 'src/app/models/user.model';
import { UserService } from 'src/app/Service/user.service';

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.css']
})
export class DashboardAdminComponent implements OnInit {
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

}
