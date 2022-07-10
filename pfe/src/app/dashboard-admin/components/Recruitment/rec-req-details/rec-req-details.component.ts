import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { recruitment } from 'src/app/models/recruitment.model';
import { recruitmentService } from "src/app//Service/recruitment.service";

@Component({
  selector: 'app-rec-req-details',
  templateUrl: './rec-req-details.component.html',
  styleUrls: ['./rec-req-details.component.css']
})
export class RecReqDetailsComponent implements OnInit {
  public recruitments: recruitment[] = [];


_id : any 
token: any 
data : any 

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


  constructor(private recruitmentService:recruitmentService, private router :Router , private route : ActivatedRoute) {
    this.recruitments = [];
   }

  ngOnInit(): void {
    this._id = this.route.snapshot.params['inReqId'];

    this.recruitmentService.getReqById(this._id).subscribe((data: recruitment)=>{
      this.recruitment = data;
      console.log( 'famaaaa',recruitment);
    });
  }

}
