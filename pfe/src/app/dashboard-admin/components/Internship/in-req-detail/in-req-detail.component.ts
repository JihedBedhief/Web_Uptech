import { Component, OnInit } from '@angular/core';
import { internshipService } from "../../../../Service/internship.service";
import {internship} from '../../../../models/internship.model';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-in-req-detail',
  templateUrl: './in-req-detail.component.html',
  styleUrls: ['./in-req-detail.component.css']
})
export class InReqDetailComponent implements OnInit {
  public internships: internship[] = [];


_id : any 
token: any 
data : any 
imgDirectoryPath : any = "http://localhost:3000/uploads/"

internship:internship = {
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
}


  constructor(private internshipService:internshipService, private router :Router , private route : ActivatedRoute) {
    this.internships = [];
   }

  ngOnInit(): void {
    this._id = this.route.snapshot.params['inReqId'];

    this.internshipService.getReqById(this._id).subscribe((data: internship)=>{
      this.internship = data;
      console.log( 'famaaaa',internship);
    });
  }

}
