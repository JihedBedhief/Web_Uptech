import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { internship } from 'src/app/models/internship.model';
import { internshipService } from "../../../../Service/internship.service";

@Component({
  selector: 'app-in-req-refused',
  templateUrl: './in-req-refused.component.html',
  styleUrls: ['./in-req-refused.component.css']
})
export class InReqRefusedComponent implements OnInit {
 
  data:any
  public internships: internship[] = [];

  constructor(private internshipService : internshipService, private router :Router) {
    this.internships = [];
   }

  ngOnInit(): void {
    this.internshipService.getRefusedIntReq().subscribe(res =>{
      this.internships = res;
      console.log(this.internships);
    })
  }


  deleteInReq(id : any){
    if(confirm("are you sure you want to delete this request ?? ")){
    this.internshipService.deleteInReq(id).subscribe((res)=>{
      this.router.navigate(['/admin/refused_in_req'])
      .then(() => {
        window.location.reload();
      });
      console.log("res", res)
    })
  }
}


}
