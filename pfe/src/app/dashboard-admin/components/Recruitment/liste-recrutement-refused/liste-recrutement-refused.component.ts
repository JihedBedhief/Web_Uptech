import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { recruitment } from 'src/app/models/recruitment.model';
import { recruitmentService } from 'src/app/Service/recruitment.service';

@Component({
  selector: 'app-liste-recrutement-refused',
  templateUrl: './liste-recrutement-refused.component.html',
  styleUrls: ['./liste-recrutement-refused.component.css']
})
export class ListeRecrutementRefusedComponent implements OnInit {

  data:any
  public recruitments: recruitment[] = [];

  constructor(private recruitmentService:recruitmentService, private router :Router) {
    this.recruitments = [];
   }

  ngOnInit(): void {
    this.recruitmentService.getRefusedRecReq().subscribe(res =>{
      this.recruitments = res;
      console.log(this.recruitments);
    })
  }

  deleteRecReq(id : any){
    if(confirm("are you sure you want to delete this request ?? ")){
    this.recruitmentService.deleteRecReq(id).subscribe((res)=>{
      this.router.navigate(['/admin/refuseded_rec_req'])
      .then(() => {
        window.location.reload();
      });
      console.log("res", res)
    })
  }
  }
}
