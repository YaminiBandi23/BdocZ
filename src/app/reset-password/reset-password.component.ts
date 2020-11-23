import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  resetPasswordData : any = {};
  resetPasswordForm: FormGroup;
  submitted = false;
resetPassword : string;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
      this.resetPasswordForm = this.formBuilder.group({
          resetPassword: ['', [Validators.required, Validators.email]]
       //   email: ['', [Validators.required, Validators.email]],
      });
  }

  // convenience getter for easy access to form fields
  get f() { return this.resetPasswordForm.controls; }

  onSubmit() {
      this.submitted = true;
      console.log(localStorage.getItem);
console.log(this.resetPasswordData.resetPassword);
      // stop here if form is invalid
      if (this.resetPasswordForm.invalid) {
          return;
      }
}
}
