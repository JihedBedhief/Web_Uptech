import { Component, OnInit } from '@angular/core';
import { ContactService } from "../../../Service/contact.service";
import {contact} from '../../../models/contact.model'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  public contacts: contact[] = [];

  data:any

  constructor(private contactService:ContactService , private router :Router) { 
    this.contacts = [];
  }

  ngOnInit(): void {
    this.contactService.getAllContacts().subscribe(res =>{
      this.contacts = res;
      console.log(this.contacts);
    })
  }

  deleteContact(id : any){
    if(confirm("are you sure you want to delete this Contact ?? ")){
    this.contactService.deleteContact(id).subscribe((res)=>{
      this.router.navigate(['/admin/contact_list'])
      .then(() => {
        window.location.reload();
      });
      console.log("res", res)
    })
  }
  }


  // handleError(error: any) {
  //   let errorMessage = '';
  //   if (error.error instanceof ErrorEvent) {
  //     // Get client-side error
  //     errorMessage = error.error.message;
  //   } else {
  //     // Get server-side error
  //     errorMessage = Error Code: ${error.status}\nMessage: ${error.message};
  //   }
  //   window.alert(errorMessage);
  //   return throwError(() => {
  //     return errorMessage;
  //   });
}
