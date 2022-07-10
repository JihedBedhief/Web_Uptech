import { Component, OnInit } from '@angular/core';
import { FormBuilder ,FormGroup,FormControl, Validators } from '@angular/forms';
import { recruitmentService } from "../Service/recruitment.service";
import {recruitment} from '../models/recruitment.model'

@Component({
  selector: 'app-recruitment',
  templateUrl: './recruitment.component.html',
  styleUrls: ['./recruitment.component.css']
})
export class RecruitmentComponent implements OnInit {

  selectedValue : any 

  Rec =  new FormGroup({
    firstName: new FormControl('',[Validators.required]),
    lastName: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required,Validators.email]),
    tel: new FormControl('',[Validators.required]),
    birthday: new FormControl('',[Validators.required]),
    adresse: new FormControl('',[Validators.required]),
    profilLinkedin: new FormControl('',[Validators.required]),
    levelOfStudy: new FormControl('',[Validators.required]),
    speciality: new FormControl('',[Validators.required]),
    experience: new FormControl('',[Validators.required]),
    desiredPosition: new FormControl('',[Validators.required]),

  })

  recruitment:recruitment ={
    firstName:'',
    lastName:'',
    email:'',
    tel:'',
    birthday:'',
    adresse:'',
    profilLinkedin:'',
    levelOfStudy:'',
    speciality:'',
    experience:'',
    desiredPosition:'',
  }

  constructor(private recruitmentService:recruitmentService) { }

  ngOnInit(): void {
  }

  level(event: any){
    this.selectedValue = event.target.value;
  }

  demander(){
    const data = {
      firstName:this.recruitment.firstName,
      lastName:this.recruitment.lastName,
      email:this.recruitment.email,
      tel:this.recruitment.tel,
      birthday:this.recruitment.birthday,
      adresse:this.recruitment.adresse,
      profilLinkedin:this.recruitment.profilLinkedin,
      levelOfStudy:this.selectedValue,
      specialité:this.recruitment.speciality,
      expérience:this.recruitment.experience,
      desiredPosition:this.recruitment.desiredPosition,
    };
    this.recruitmentService.demander(data).subscribe(
      (response:any)=>{
        console.log(response)
      },
 
      (error:any)=>{
      console.log(error);
      }
    )
  }

}
