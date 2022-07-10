import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { recruitment } from 'src/app/models/recruitment.model';
import { recruitmentService } from 'src/app/Service/recruitment.service';

@Component({
  selector: 'app-liste-recrutement-accepted',
  templateUrl: './liste-recrutement-accepted.component.html',
  styleUrls: ['./liste-recrutement-accepted.component.css']
})
export class ListeRecrutementAcceptedComponent implements OnInit {

  data:any
  public recruitments: recruitment[] = [];

  constructor(private recruitmentService:recruitmentService, private router :Router) {
    this.recruitments = [];
   }

  ngOnInit(): void {
    this.recruitmentService.getAcceptedRecReq().subscribe(res =>{
      this.recruitments = res;
      console.log(this.recruitments);
    })
  }

  deleteRecReq(id : any){
    if(confirm("are you sure you want to delete this request ?? ")){
    this.recruitmentService.deleteRecReq(id).subscribe((res)=>{
      this.router.navigate(['/admin/accepted_rec_req'])
      .then(() => {
        window.location.reload();
      });
      console.log("res", res)
    })
  }
  }
}
