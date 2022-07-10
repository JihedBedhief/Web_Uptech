import { Component, OnInit } from '@angular/core';
import { FormBuilder ,FormGroup,FormControl, Validators } from '@angular/forms';
import { UserService } from "../Service/user.service";
import {user} from '../models/user.model'

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

    signUp =  new FormGroup({
      name: new FormControl('',[Validators.required]),
      FamilyName: new FormControl('',[Validators.required]),
      email:new FormControl('',[Validators.required]),
      PhoneNumber: new FormControl('',[Validators.required]),
      password:new FormControl(  '',[ Validators.required]),
      confirmPassword:new FormControl(  '',[ Validators.required]),
      file:new FormControl('')
  })

  user:user ={
    name:'',
    FamilyName:'',
    PhoneNumber:'',
    email:'',
    password:'',
    confirmPassword:'',
    file:'',
  
  }
  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }


   
  selectedFile: File = null
  onFilePicked(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.signUp.patchValue({ file: file });
    this.signUp.get('file').updateValueAndValidity();
    const reader = new FileReader();
    reader.readAsDataURL(file);


  }

  register(){
    // const data = {
    //   name:this.user.name,
    //   FamilyName:this.user.FamilyName,
    //   PhoneNumber:this.user.PhoneNumber,
    //   email:this.user.email,
    //   password:this.user.password,
    //   confirmPassword:this.user.confirmPassword,
    // };

    const formData = new FormData();
    formData.append('name',this.signUp.value.name),
    formData.append('FamilyName',this.signUp.value.FamilyName),
    formData.append('PhoneNumber',this.signUp.value.PhoneNumber),
    formData.append('email',this.signUp.value.email),
    formData.append('password',this.signUp.value.password),
    formData.append('confirmPassword',this.signUp.value.confirmPassword),
    formData.append('file',this.signUp.value.file),
    console.log(formData.get('file'))
    this.userService.register(formData).subscribe(
      (response:any)=>{
        console.log(response)
      },
 
      (error:any)=>{
      console.log(error);
      }
    )
  }

  


}
