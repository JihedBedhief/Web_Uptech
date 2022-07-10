import { Component, OnInit } from '@angular/core';
import { internshipService } from "../../../../Service/internship.service";
import {internship} from '../../../../models/internship.model';
import { Router } from '@angular/router';



@Component({
  selector: 'app-list-internship',
  templateUrl: './list-internship.component.html',
  styleUrls: ['./list-internship.component.css']
})
export class ListInternshipComponent implements OnInit {
  public internships: internship[] = [];
  selectedValue : any 
  data:any
  url="http://localhost:3000/api/demandesRec\\fedy.png"
  path = '../../../../assets/' ;

  imgDirectoryPath : any = "http://localhost:3000/uploads/"


  constructor(private internshipService:internshipService, private router :Router) {
    this.internships = [];
    this.path
   }

  ngOnInit(): void {
    this.internshipService.getAllIntReq().subscribe(res =>{
      this.internships = res;
      console.log(this.internships);
    })
  
  }


  level(event: any){
    this.selectedValue = event.target.value;
    return this.selectedValue;
  }



  filterL(){
    this.internshipService.filterL().subscribe(res =>{
      this.internships = res;
      console.log(this.internships);
    })
  }
  filterM(){
    this.internshipService.filterM().subscribe(res =>{
      this.internships = res;
      console.log(this.internships);
    })
  }

  filterI(){
    this.internshipService.filterI().subscribe(res =>{
      this.internships = res;
      console.log(this.internships);
    })
  }



  acceptInReq(id: any){
    if(confirm("are you sure you want to accept this request ?? ")){
        this.internshipService.acceptInReq(id).subscribe((res)=>{
          this.router.navigate(['/admin/internship_list'])
          .then(() => {
            window.location.reload();
          });
          console.log("res", res)
        })
      }
  }

  refuseInReq(id: any){
    if(confirm("are you sure you want to refuse this request ?? ")){
        this.internshipService.refuseInReq(id).subscribe((res)=>{
          this.router.navigate(['http://localhost:4200/admin/internship_list'])
          .then(() => {
            window.location.reload();
          });
          console.log("res", res)
        })
      }
  }


}
