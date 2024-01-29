import { Component, EventEmitter, Output } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  
  fullname: string = "";
  userId: string = ""; 
  isUser: boolean = false;

}
