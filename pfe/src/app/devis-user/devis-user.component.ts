import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { categorie } from 'src/app/models/categorie.model';
import { CategorieService } from 'src/app/Service/categorie.service';
import { ngxCsv } from 'ngx-csv/ngx-csv';

@Component({
  selector: 'app-devis-user',
  templateUrl: './devis-user.component.html',
  styleUrls: ['./devis-user.component.css']
})
export class DevisUserComponent implements OnInit {

  public categories: categorie[] = [];
  public services = [];

  data:any
  dataRecived:any

  constructor(private categorieServices:CategorieService , private router :Router) { 
    this.categories = [];
    this.services = [];
  }

  ngOnInit(): void {
    this.categorieServices.getAllCategorie().subscribe(res =>{
      this.categories = res;
      console.log(this.categories);
    })

    this.dataRecived = localStorage.getItem("services")
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

  Export(){
    var options = { 
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalseparator: '.',
      showLabels: true, 
      showTitle: true,
      title: 'Devis Request data',
      useBom: true,
      headers: ["Id","name"]
    };
   
    new ngxCsv(this.categories, "Devis Request", options);
  }
}
