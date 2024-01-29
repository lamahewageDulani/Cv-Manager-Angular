import { Component, EventEmitter } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  
  fullname: string = "";

  onSearchTextChange: EventEmitter<string> = new EventEmitter<string>();

  onSearch(){
    this.onSearchTextChange.emit(this.fullname);
    console.log(this.fullname);
  }
}
