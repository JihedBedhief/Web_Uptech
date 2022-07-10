import { Component, OnInit } from '@angular/core';
import { FormBuilder ,FormGroup,FormControl, Validators } from '@angular/forms';
import { internshipService } from "../Service/internship.service";
import {internship} from '../models/internship.model';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-internship-request',
  templateUrl: './internship-request.component.html',
  styleUrls: ['./internship-request.component.css']
})
export class InternshipRequestComponent implements OnInit {


  selectedValue : any 

  Inr =  new FormGroup({
    firstName: new FormControl('',[Validators.required]),
    lastName: new FormControl('',[Validators.required]),
    Email: new FormControl('',[Validators.required,Validators.email]),
    tel: new FormControl('',[Validators.required]),
    birthday: new FormControl('',[Validators.required]),
    adresse: new FormControl('',[Validators.required]),
    profilLinkedin: new FormControl('',[Validators.required]),
    levelOfStudy: new FormControl('',[Validators.required]),
    University: new FormControl('',[Validators.required]),
    Subsidiary: new FormControl('',[Validators.required]),
    competences: new FormControl('',[Validators.required]),    
    certifcats: new FormControl('',[Validators.required]),
    internshipDuration: new FormControl('',[Validators.required]),
    startDate: new FormControl('',[Validators.required]),
    endDate: new FormControl('',[Validators.required]),
    file: new FormControl('null',[Validators.required]),

  })


  internship:internship ={
    firstName:'',
    lastName:'',
    Email:'',
    tel:'',
    birthday:'',
    adresse:'',
    profilLinkedin:'',
    levelOfStudy:'',
    University:'',
    Subsidiary:'',
    competences:'',
    certifcats:'',
    internshipDuration:'',
    startDate:'',
    endDate:'',
    file:'',
  }

  constructor(private internshipService:internshipService, private router :Router) {

   }

  ngOnInit(): void {
  }

  // images : any;
  // multipleImages = [];
  
  level(event: any){
    this.selectedValue = event.target.value;
  }

  
  selectedFile: File = null
  onFilePicked(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.Inr.patchValue({ file: file });
    this.Inr.get('file').updateValueAndValidity();
    const reader = new FileReader();
    reader.readAsDataURL(file);


  }

  demander(){    
    const formData = new FormData();
    formData.append('firstName',this.Inr.value.firstName),
    formData.append('lastName',this.Inr.value.lastName),
    formData.append('Email',this.Inr.value.Email),
    formData.append('tel',this.Inr.value.tel),
    formData.append('birthday',this.Inr.value.birthday),
    formData.append('adresse',this.Inr.value.adresse),
    formData.append('profilLinkedin',this.Inr.value.profilLinkedin),
    formData.append('levelOfStudy',this.Inr.value.levelOfStudy),
    formData.append('University',this.Inr.value.University),
    formData.append('Subsidiary',this.Inr.value.Subsidiary),
    formData.append('competences',this.Inr.value.competences),
    formData.append('certifcats',this.Inr.value.certifcats),
    formData.append('internshipDuration',this.Inr.value.internshipDuration),
    formData.append('startDate',this.Inr.value.startDate),
    formData.append('endDate',this.Inr.value.endDate),
    formData.append('file',this.Inr.value.file),
    console.log(formData.get('firstName'))

    this.internshipService.demander(formData).subscribe(
      (response:any)=>{
        console.log(response)
      },
 
      (error:any)=>{
      console.log(error);
      }
     )
    console.log(formData)

  }







}
