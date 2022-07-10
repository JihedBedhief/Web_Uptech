import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { categorie } from 'src/app/models/categorie.model';
import { CategorieService } from 'src/app/Service/categorie.service';

@Component({
  selector: 'app-list-categorie',
  templateUrl: './list-categorie.component.html',
  styleUrls: ['./list-categorie.component.css']
})
export class ListCategorieComponent implements OnInit {
  public categories: categorie[] = [];

  data:any


  constructor(private categorieServices:CategorieService , private router :Router) { 
    this.categories = [];
  }

  ngOnInit(): void {
    this.categorieServices.getAllCategorie().subscribe(res =>{
      this.categories = res;
      console.log(this.categories);
    })
  }

 
  deleteCategorie(id : any){
    if(confirm("are you sure you want to delete this categorie ?? ")){
    this.categorieServices.deletecategorie(id).subscribe((res)=>{
      this.router.navigate(['/admin/liste_categorie'])
      .then(() => {
        window.location.reload();
      });
      console.log("res", res)
    })
  }
  }

  // archiveUser(id : any){
  //   if(confirm("are you sure you want to archive this user ?? ")){
  //   this.userService.archiveUser(id).subscribe((res)=>{
  //     this.router.navigate(['/admin/user_liste'])
  //     .then(() => {
  //       window.location.reload();
  //     });
  //     console.log("res", res)
  //   })
  // }
  // }

//   getUserById(id : any){
//     this.userService.getUserById(id).subscribe(res =>{
//       this.router.navigate(['/admin/user_detail'])
//       console.log(this.users);
//     })
// }
}
