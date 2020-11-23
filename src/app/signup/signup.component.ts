import { UserService } from './../user-service.service';
import { Component } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router, Routes } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { MustMatch } from "../_helpers/must-watch.validator";
import { NotificationService } from '../toastr-notification/toastr-notification.service';




@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"]
})
export class SignupComponent {
  
  value = new  Date();
  State: any = ["Alabama", "Arkansas", "Arizona", "California", "Colorado"];
  signUPForm: FormGroup;
  submitted = false;
  usersData: any;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  phoneNumber: Number;
  socialSecurityNumber: string;
  streetAddress: string;
  city: string;
  zipCode :string;
  dateOfBirth :string;
  data: any;
  singUpDetails :any= {};

  dateTime = new Date();
  
  constructor(    

    private router?: Router, private _notificationservice ?:NotificationService,
    private formBuilder?: FormBuilder,
    private  userService?: UserService) {
    
    this.data = [];
    this.dateTime.setDate(this.dateTime.getDate() + 0); 
  }

  ngOnInit() {
    this.signUPForm = this.formBuilder.group(
      {
        firstName: ["", Validators.required],
        lastName: ["", Validators.required],
        email: ["", [Validators.required, Validators.email]],
        password: ["", [Validators.required, Validators.minLength(8)]],
        confirmPassword: ["", Validators.required],
        phoneNumber: ["", [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
        socialSecurityNumber:["", [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{9}$")]],
        streetAddress: ["", Validators.required],
        city: ["", Validators.required],
        stateName: ["", [Validators.required]],
        zipCode:["", [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{5}$")]],
        dateOfBirth: ['', Validators.required]
      },

      {
        validator: MustMatch("password", "confirmPassword")
      }
    );
  }
  
  
  changeState(e) {
    console.log(e.value);
    this.stateName.setValue(e.target.value, {
      onlySelf: true
    });
  }
  changePhoneNumberState(e){
    e.target.value = e.target.value.replace(/(\d{3})\ ?(\d{3})\-?(\d{4})/,'$1-$2-$3');
  }
  get stateName() {
    return this.signUPForm.get("stateName");
  }

  onSubmit() {
    this.submitted = true;
    console.log(" email is -----" + this.singUpDetails);
    // stop the process here if form is invalid
    if (this.signUPForm.invalid) {
      return;
    }
     else
     {
      this.newUsers();
      setTimeout( () => {this.router.navigateByUrl("/signin");}, 2000 );
      this.showSuccessNotification();
     }
  }
  public showSuccessNotification(){  
    this._notificationservice.success("New User Created successfully");  
  }  
  
 newUsers(){

  this.userService.addUsers(this.singUpDetails).subscribe(res => {
    console.log('Data added!');
    this.data = res;

  })

 }
 text: string;


   
}
