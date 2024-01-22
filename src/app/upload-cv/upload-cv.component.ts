import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-upload-cv',
  templateUrl: './upload-cv.component.html',
  styleUrls: ['./upload-cv.component.css']
})
export class UploadCvComponent implements OnInit{
  formVar!: FormGroup;
  constructor(private fb: FormBuilder) {}

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
  onSubmit() {
    console.log(this.formVar.value);
  }

  onSelected(value: string): void {
    this.formVar.get('selectedarea')?.setValue(value);
  }
}
