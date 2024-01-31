import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { UserserviceService } from '../services/userservice.service';

@Component({
  selector: 'app-upload-cv',
  templateUrl: './upload-cv.component.html',
  styleUrls: ['./upload-cv.component.css']
})
export class UploadCvComponent implements OnInit{
  formVar!: FormGroup;
  constructor(private fb: FormBuilder, private userService: UserserviceService) {}

  ngOnInit() {
    this.formVar = this.fb.group({
      firstname: '',
      lastname: '',
      email: '',
      phone: '',
      selectedarea: '',
      selectedexperience: '',
      remarks: '',
    });

  }

  // add to the local storage
  user: any = {};

  onSubmit() {
    console.log(this.formVar.value);
    this.user = Object.assign(this.user, this.formVar.value);
    localStorage.setItem('user', JSON.stringify(this.user));
    this.userService.addUser(this.user);
    alert('Your CV has been uploaded successfully');
    this.formVar.reset();
  }

  onSelected(value: string): void {
    this.formVar.get('selectedarea')?.setValue(value);
  }
}
