import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { user } from 'src/app/models/user.model';
import { UserService } from 'src/app/Service/user.service';

@Component({
  selector: 'app-liste-users-refused',
  templateUrl: './liste-users-refused.component.html',
  styleUrls: ['./liste-users-refused.component.css']
})
export class ListeUsersRefusedComponent implements OnInit {

  data:any
  public users: user[] = [];

  constructor(private userService:UserService , private router :Router) { 
    this.users = [];
  }

  ngOnInit(): void {
    this.userService.getAllUserRefused().subscribe(res =>{
      this.users = res;
      console.log(this.users);
    })
  }

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


  deleteUser(id : any){
    if(confirm("are you sure you want to delete this user ?? ")){
    this.userService.deleteUser(id).subscribe((res)=>{
      this.router.navigate(['/admin/user_liste'])
      .then(() => {
        window.location.reload();
      });
      console.log("res", res)
    })
  }
  }

  getUserById(id : any){
    this.userService.getUserById(id).subscribe(res =>{
      this.router.navigate(['/admin/user_detail'])
      console.log(this.users);
    })

}


}
