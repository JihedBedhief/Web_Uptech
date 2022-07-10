import { Component, OnInit } from '@angular/core';
import { UserService } from "../../../../Service/user.service";
import {user} from '../../../../models/user.model'
import { Router } from '@angular/router';


@Component({
  selector: 'app-liste-users-request',
  templateUrl: './liste-users-request.component.html',
  styleUrls: ['./liste-users-request.component.css']
})
export class ListeUsersRequestComponent implements OnInit {

  data:any
  term : any
  public users: user[] = [];

  constructor(private userService:UserService , private router :Router) { 
    this.users = [];
    this.term 
  }

  ngOnInit(): void {
    this.userService.getAllRequest().subscribe(res =>{
      this.users = res;
      console.log(this.users);
    })
  }

  // deleteUser(id : any){
  //   if(confirm("are you sure you want to delete this user ?? ")){
  //   this.userService.deleteUser(id).subscribe((res)=>{
  //     this.router.navigate(['/admin/user_liste'])
  //     .then(() => {
  //       window.location.reload();
  //     });
  //     console.log("res", res)
  //   })
  // }
  // }


  acceptUser(id: any){
    if(confirm("are you sure you want to accept this user ?? ")){
        this.userService.acceptUser(id).subscribe((res)=>{
          this.router.navigate(['/admin/user_liste_request'])
          .then(() => {
            window.location.reload();
          });
          console.log("res", res)
        })
      }
  }

  refuseUser(id: any){
    if(confirm("are you sure you want to refuse this user ?? ")){
        this.userService.refuseUser(id).subscribe((res)=>{
          this.router.navigate(['http://localhost:4200/admin/user_liste_request'])
          .then(() => {
            window.location.reload();
          });
          console.log("res", res)
        })
      }
  }

}
