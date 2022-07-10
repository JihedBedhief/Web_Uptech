import { Component, OnInit } from '@angular/core';
import { FormBuilder ,FormGroup,FormControl, Validators } from '@angular/forms';
import { ContactService } from "../Service/contact.service";
import {contact} from '../models/contact.model'


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {

  Contact =  new FormGroup({
    fullName: new FormControl('',[Validators.required]),
    sub: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required,Validators.email]),
    msg: new FormControl('',[Validators.required]),

  })

  contact:contact ={
    fullName:'',
    sub:'',
    email:'',
    msg:'',
  }


  constructor(private contactService:ContactService) { 

  }



  ngOnInit(): void {
  }
 
  contacter(){
    const data = {
      fullName:this.contact.fullName,
      sub:this.contact.sub,
      email:this.contact.email,
      msg:this.contact.msg,
    };
    this.contactService.contacter(data).subscribe(
      (response:any)=>{
        console.log(response)
      },
 
      (error:any)=>{
      console.log(error);
      }
    )
    // alert("message send");
  }

}
