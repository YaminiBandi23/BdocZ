import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from '../user-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from '../toastr-notification/toastr-notification.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-change-profile',
  templateUrl: './change-profile.component.html',
  styleUrls: ['./change-profile.component.css']
})
export class ChangeProfileComponent implements OnInit {
  changeProfileDetails:any= {};
  changeProfileForm: FormGroup;
  submitted = false;  
  State: any = ["Alabama", "Arkansas", "Arizona", "California", "Colorado"];

 email: string =""  ;
  password : any ;
  usersData :any;
  // password: any;
  subscription: Subscription;
  objectKeys = Object.keys;
  dob: any;
  

  constructor(private formBuilder?: FormBuilder, private router?:Router, private httpClient ?: HttpClient,
    private userService ?: UserService, private _notificationservice ?:NotificationService) { 

  }

  ngOnInit() {
    this.usersData = JSON.parse(localStorage.getItem("user"));
    console.log(this.usersData);
    // this.firstName=JSON.parse(localStorage.getItem("user")).firstName;
    console.log(this.usersData[0]);
console.log(JSON.parse(localStorage.getItem("user")));

      this.changeProfileForm = this.formBuilder.group({
          email: ['', [Validators.required, Validators.email]],
          firstName : ['', Validators.required],
          lastName : ['', Validators.required],
          streetAddress : ['', Validators.required],
          phoneNumber: ["", [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
        city :['', Validators.required],
        zipCode :['', Validators.required],
        SSN  :['', Validators.required],
        socialSecurityNumber: ["", [Validators.required]],
        dateOfBirth :['', Validators.required]
      });

console.log(this.usersData.dateOfBirth);
this.dob = this.usersData.dateOfBirth;
this.usersData.dateOfBirth= new Date(this.usersData.dateOfBirth.year, this.usersData.dateOfBirth.month, this.usersData.dateOfBirth.day);
  };

  onSubmit() {
      this.submitted = true;
    console.log(this.email + " --- email is");
    console.log(this.usersData);
    console.log(this.password + "--- password is");
console.log("data is " + (Object.values(this.usersData)));

// stop the process here if form is invalid
      if (this.changeProfileForm.invalid) {
          return;
      }

}
changePhoneNumberState(e){
  e.target.value = e.target.value.replace(/(\d{3})\ ?(\d{3})\-?(\d{4})/,'$1-$2-$3');
}
get stateName() {
  return this.changeProfileForm.get("stateName");
}


changeState(e) {
  console.log(e.value);
  this.stateName.setValue(e.target.value, {
    onlySelf: true
  });
}





}