import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { categorie } from 'src/app/models/categorie.model';
import { services } from 'src/app/models/services.model';
import { CategorieService } from 'src/app/Service/categorie.service';
import { ServicesService } from 'src/app/Service/services.service';

@Component({
  selector: 'app-update-service',
  templateUrl: './update-service.component.html',
  styleUrls: ['./update-service.component.css']
})
export class UpdateServiceComponent implements OnInit {
  token : any
  id:any
  dataRecived : any
  data : any 
  imageSrc : string = ''

  Update =  new FormGroup({
    name: new FormControl('',[Validators.required]),
    // file: new FormControl('',[Validators.required]),
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

constructor( private servicesService : ServicesService , private categorieServices : CategorieService, private router:Router,private route : ActivatedRoute) {
  this.categories = [];
 }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['_id'];
    this.servicesService.getServiceById(this.id).subscribe((data : services)=>{
    this.services=data ;
    console.log(this.services)
    })
    this.Update =  new FormGroup({
      name: new FormControl('',[Validators.required]),
      // file: new FormControl('',[Validators.required]),
      descreption: new FormControl('',[Validators.required]),
      prix: new FormControl('',[Validators.required]),
      categorie: new FormControl('',[Validators.required]),
      title: new FormControl('',[Validators.required]),
  })
  console.log(this.services)

    this.categorieServices.getAllCategorie().subscribe(res =>{
      this.categories = res;
      })

  }

  selectedFile: File = null
  onFilePicked(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.Update.patchValue({ file: file });
    this.Update.get('file').updateValueAndValidity();
    const reader = new FileReader();
    reader.readAsDataURL(file);
  }

  // onFilePicked(event:any) {
  //   const reader = new FileReader();
    
  //   if(event.target.files && event.target.files.length) {
  //     const [file] = event.target.files;
  //     reader.readAsDataURL(file);
    
  //     reader.onload = () => {
   
  //       this.imageSrc = reader.result as string;
     
  //       this.Update.patchValue({
  //         fileSource: reader.result
  //       });
   
  //     };
   
  //   }
  // }

  update(_id:any){
    this.servicesService.updateService(_id,this.services).subscribe(res=>{
      this.data=res;
      })
      // this.router.navigate(['/liste_services'])
      // .then(() => {
      //   window.location.reload();
      // });
    }
  categorie(event: any){
    this.selectedValue = event.target.value;
    console.log(this.selectedValue)
  }


}
