import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  ngOnInit() {
    console.log(this.isUser);
  }
  
  fullname: string = "";
  userId: string = ""; 
  isUser: string = "All"; 

}
