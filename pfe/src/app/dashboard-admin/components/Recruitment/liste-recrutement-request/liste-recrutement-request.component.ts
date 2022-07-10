import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { recruitment } from 'src/app/models/recruitment.model';
import { recruitmentService } from 'src/app/Service/recruitment.service';

@Component({
  selector: 'app-liste-recrutement-request',
  templateUrl: './liste-recrutement-request.component.html',
  styleUrls: ['./liste-recrutement-request.component.css']
})
export class ListeRecrutementRequestComponent implements OnInit {
  data:any
  public recruitments: recruitment[] = [];

  constructor(private recruitmentService:recruitmentService, private router :Router) {
    this.recruitments = [];
   }

  ngOnInit(): void {
    this.recruitmentService.getAllRecReq().subscribe(res =>{
      this.recruitments = res;
      console.log(this.recruitments);
    })
  }



  acceptRecReq(id: any){
    if(confirm("are you sure you want to accept this request ?? ")){
        this.recruitmentService.acceptRecReq(id).subscribe((res)=>{
          this.router.navigate(['/admin/liste_rec_req'])
          .then(() => {
            window.location.reload();
          });
          console.log("res", res)
        })
      }
  }

  refuseRecReq(id: any){
    if(confirm("are you sure you want to refuse this request ?? ")){
        this.recruitmentService.refuseRecReq(id).subscribe((res)=>{
          this.router.navigate(['http://localhost:4200/admin/liste_rec_req'])
          .then(() => {
            window.location.reload();
          });
          console.log("res", res)
        })
      }
  }




}
