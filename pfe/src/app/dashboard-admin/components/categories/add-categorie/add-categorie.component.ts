import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { categorie } from 'src/app/models/categorie.model';
import { CategorieService } from 'src/app/Service/categorie.service';

@Component({
  selector: 'app-add-categorie',
  templateUrl: './add-categorie.component.html',
  styleUrls: ['./add-categorie.component.css']
})
export class AddCategorieComponent implements OnInit {


  Categorie =  new FormGroup({
    name: new FormControl('',[Validators.required]),
})

categorie:categorie ={
  name:'',
}
  constructor( private categorieService : CategorieService , private router:Router) { }

  ngOnInit(): void {
  }

  addCategorie(){
    const data = {
      name:this.categorie.name,
    };
    this.categorieService.addCategorie(data).subscribe(
      (response:any)=>{
        console.log(response)
      },
 
      (error:any)=>{
      console.log(error);
      }
    )
    this.router.navigate(['/admin/liste_categorie'])      
    .then(() => {
        window.location.reload();
      });
  }

}
