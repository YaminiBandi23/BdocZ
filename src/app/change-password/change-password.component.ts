import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NotificationService } from '../toastr-notification/toastr-notification.service';
import { UserService } from '../user-service.service';
import { MustMatch } from '../_helpers/must-watch.validator';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit  {
  changePasswordForm: FormGroup;
  submitted = false;  
  email: string =""  ;
  newpassword :string = "";
  confirmPassword : string = "";
  currentPassword : string = "";
    adminData: any;
  role: string;
  message: any;
  subscription: Subscription;

  constructor(private formBuilder?: FormBuilder, private router?:Router, private httpClient ?: HttpClient,
    private userService ?: UserService, private _notificationservice ?:NotificationService) { 
      this.adminData = [];


  }  

  ngOnInit() {
    this.subscription = this.userService.getMessage().subscribe(message => { this.message = message; });
    console.log(this.message);
    console.log("äsgfdshs");


    this.role = sessionStorage.getItem("role");
    console.log(sessionStorage.getItem('role'));

    if(sessionStorage.getItem('role')=="superAdmin"){
    console.log("superadmin");
    }
    if(sessionStorage.getItem('role')=="admin"){
      console.log("admin");
      }
  

    this.changePasswordForm = this.formBuilder.group({
      newpassword: ['', Validators.required],
      currentPassword :['', Validators.required],
      confirmPassword: ["", Validators.required],


  },
  {
    validator: MustMatch("newpassword", "confirmPassword")
  });

  this.getAdmins();
             // subscribe to signin component messages

  }
 
  onSubmit() {
    this.submitted = true;
    console.log(this.currentPassword + "--- current password is");
  console.log(this.newpassword + "--- New password is");
  console.log(this.confirmPassword + "--- confirm password is");


// stop the process here if form is invalid
    if (this.changePasswordForm.invalid) {
        return;
    }
    else
    {
      //this.getUsers();
      let isValid = false;
      this.adminData.forEach(element => {
        if(element.email == this.email && element.newpassword == this.newpassword)
        {
          isValid = true;
          localStorage.setItem("user",JSON.stringify(element));
         return;
        }
      });
      if(!isValid)
      {
        this.showErrorNotification();
      }
    }
  }
  getAdmins() {
    //Get saved list of users
    this.userService.getAdminList().subscribe(response => {
     console.log(response);
      this.adminData = response;
    })
  }
    public showSuccessNotification(){  
      this._notificationservice.success("login successfully");  
    }  
    
    public showErrorNotification(){  
      this._notificationservice.error("Invalid userid/password");  
    }  

    ngOnDestroy() {
      // unsubscribe to ensure no memory leaks
      this.subscription.unsubscribe();
  }
  
  }


  

