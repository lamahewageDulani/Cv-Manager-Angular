import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email: string = "";
  password: string = "";
  path: string = "";

  onClick(){
    let storedEmail = localStorage.getItem('email');
    let storedPassword = localStorage.getItem('password');
    console.log(storedEmail);
    console.log(storedPassword);
    console.log(this.email);
    console.log(this.password);

  if (this.email === storedEmail && this.password === storedPassword) {
    alert('You are logged in.');
    this.path = '/Dashboard';
  } else {
    alert('Invalid credentials.');
    this.path = '/Login';
  }
  }
}
