import { Component, OnInit } from '@angular/core';
import { UserService } from "../../../../Service/user.service";
import {user} from '../../../../models/user.model'
import { ActivatedRoute, Router } from '@angular/router';
import { ngxCsv } from 'ngx-csv/ngx-csv';

@Component({
  selector: 'app-liste-users',
  templateUrl: './liste-users.component.html',
  styleUrls: ['./liste-users.component.css']
})
export class ListeUsersComponent implements OnInit {
errorMessage:any
 public users: user[] = [];
 data: any;
 imgDirectoryPath : any = "http://localhost:3000/uploads/"


  constructor(private userService:UserService , private router :Router) { 
    this.users = [];
  }

  ngOnInit(): void {
    this.userService.getAllUserAccepted().subscribe(res =>{
      this.users = res;
      console.log(this.users);
    },(error)=>{
      this.errorMessage=error;
      console.log(error)
        })
  }

 
  deleteUser(id : any){
    if(confirm("are you sure you want to delete this user ?? ")){
    this.userService.deleteUser(id).subscribe((res)=>{
      window.location.reload();
      console.log("res", res)
      this.users.splice(id,1)})
  }
  
}

  archiveUser(id : any){
    if(confirm("are you sure you want to archive this user ?? ")){
    this.userService.archiveUser(id).subscribe((res)=>{
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

// Export(){
//   var options = { 
//     fieldSeparator: ',',
//     quoteStrings: '"',
//     decimalseparator: '.',
//     showLabels: true, 
//     showTitle: true,
//     title: 'Report data',
//     useBom: true,
//     headers: ["Id","email"]
//   };
 
//   new ngxCsv(this.users, "report", options);
// }

}
