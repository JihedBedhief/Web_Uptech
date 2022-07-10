import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { categorie } from 'src/app/models/categorie.model';
import { CategorieService } from 'src/app/Service/categorie.service';
import { devis } from 'src/app/models/devis.model';
import { DevisService } from 'src/app/Service/devis.service';

@Component({
  selector: 'app-devis',
  templateUrl: './devis.component.html',
  styleUrls: ['./devis.component.css']
})
export class DevisComponent implements OnInit {
  public categories: categorie[] = [];
  public deviss: devis[] = [];

  data:any
  imgDirectoryPath : any = "http://localhost:3000/uploads/"

  constructor(private devisService:DevisService, private router :Router) { 
    this.deviss = [];
  }

  ngOnInit(): void {
    this.devisService.getAllDevis().subscribe(res =>{
      this.deviss = res;
      console.log(this.deviss);
    })
  }

 
  deleteDevis(id : any){
    if(confirm("are you sure you want to delete this devis ?? ")){
    this.devisService.deleteDevis(id).subscribe((res)=>{
      this.router.navigate(['/admin/devis'])
      .then(() => {
        window.location.reload();
      });
      console.log("res", res)
    })
  }
  }
}
