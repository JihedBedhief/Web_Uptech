import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { categorie } from 'src/app/models/categorie.model';
import { services } from 'src/app/models/services.model';
import { CategorieService } from 'src/app/Service/categorie.service';
import { ServicesService } from 'src/app/Service/services.service';

@Component({
  selector: 'app-add-services',
  templateUrl: './add-services.component.html',
  styleUrls: ['./add-services.component.css']
})
export class AddServicesComponent implements OnInit {

  Services =  new FormGroup({
    name: new FormControl('',[Validators.required]),
    file: new FormControl('',[Validators.required]),
    descreption: new FormControl('',[Validators.required]),
    prix: new FormControl('',[Validators.required]),
    categorie: new FormControl('',[Validators.required]),
    title: new FormControl('',[Validators.required]),
})

selectedValue : any 

services:services ={
  name:'',
  file:'',
  descreption:'',
  prix:null,
  categorie :'',
  title : '',
}

public categories: categorie[] = [];

constructor( private servicesService : ServicesService , private categorieServices : CategorieService, private router:Router) {
  this.categories = [];
 }

  ngOnInit(): void {
    this.categorieServices.getAllCategorie().subscribe(res =>{
    this.categories = res;
      console.log(this.categories);
    })
  }


  selectedFile: File = null
  onFilePicked(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.Services.patchValue({ file: file });
    this.Services.get('file').updateValueAndValidity();
    const reader = new FileReader();
    reader.readAsDataURL(file);


  }

  categorie(event: any){
    this.selectedValue = event.target.value;
    console.log(this.selectedValue)
  }


  addServices(){
    const formData = new FormData();
    formData.append('name',this.Services.value.name),
    formData.append('descreption',this.Services.value.descreption),
    formData.append('prix',this.Services.value.prix),
    formData.append('categorie',this.Services.value.categorie),
    formData.append('file',this.Services.value.file),
    formData.append('title',this.Services.value.title),
    console.log(formData.get('file'))

    this.servicesService.addServices(formData).subscribe(
      (response:any)=>{
        console.log(response)
      },
      (error:any)=>{
      console.log(error);
      }
    )
    this.router.navigate(['/admin/liste_services'])      
    .then(() => {
        window.location.reload();
      });
    console.log(formData)


  }




}
