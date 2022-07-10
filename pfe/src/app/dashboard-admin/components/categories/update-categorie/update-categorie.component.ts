import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { categorie } from 'src/app/models/categorie.model';
import { services } from 'src/app/models/services.model';
import { CategorieService } from 'src/app/Service/categorie.service';
import { ServicesService } from 'src/app/Service/services.service';

@Component({
  selector: 'app-update-categorie',
  templateUrl: './update-categorie.component.html',
  styleUrls: ['./update-categorie.component.css']
})
export class UpdateCategorieComponent implements OnInit {

  token : any
  id:any
  dataRecived : any
  data : any 

  Update =  new FormGroup({
    name: new FormControl('',[Validators.required]),
})

categorie:categorie ={
  name:'',
}
  constructor( private categorieService : CategorieService , private route:ActivatedRoute , private router:Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['_id'];
    this.categorieService.getCategorieById(this.id).subscribe((data : services)=>{
    this.categorie=data ;
    console.log(this.categorie)
    })
    this.Update =  new FormGroup({
      name: new FormControl('',[Validators.required]),
  })
  }

  update(_id:any){
    this.categorieService.updateCategorie(_id,this.categorie).subscribe(res=>{
      this.data=res;
      })
      this.router.navigate(['/liste_categorie'])
      .then(() => {
        window.location.reload();
      });
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
