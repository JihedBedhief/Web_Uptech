import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../Service/notification.service'



@Component({
  selector: 'app-toast-test',
  templateUrl: './toast-test.component.html',
  styleUrls: ['./toast-test.component.css']
})
export class ToastTestComponent implements OnInit {
  title = 'toaster-not';
  ngOnInit(): void {
  }
  constructor(private notifyService : NotificationService) { }

  showToasterSuccess(){
    this.notifyService.showSuccess("Data shown successfully !!", "Data shown successfully !!")
  }
   
  showToasterError(){
    this.notifyService.showError("Something is wrong", "Something is wrong")
  }
   
  showToasterInfo(){
    this.notifyService.showInfo("This is info", "This is info")
  }
   
  showToasterWarning(){
    this.notifyService.showWarning("This is warning", "This is warning")
  }


}
