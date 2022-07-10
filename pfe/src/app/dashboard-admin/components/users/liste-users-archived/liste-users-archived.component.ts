import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { user } from 'src/app/models/user.model';
import { UserService } from 'src/app/Service/user.service';

@Component({
  selector: 'app-liste-users-archived',
  templateUrl: './liste-users-archived.component.html',
  styleUrls: ['./liste-users-archived.component.css']
})
export class ListeUsersArchivedComponent implements OnInit {

  public users: user[] = [];

  data:any

  constructor(private userService:UserService , private router :Router) { 
    this.users = [];
  }

  ngOnInit(): void {
    this.userService.getAllUserArchived().subscribe(res =>{
      this.users = res;
      console.log(this.users);
    })
  }

  diArchiveUser(id : any){
    if(confirm("are you sure you want to disarchive this user ?? ")){
    this.userService.disArchiveUser(id).subscribe((res)=>{
      console.log("res", res)
      this.router.navigate(['/admin/user_liste'])
      .then(() => {
        window.location.reload();
      });
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
