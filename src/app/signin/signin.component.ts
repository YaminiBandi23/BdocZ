import { UserService } from './../user-service.service';
import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, Routes } from '@angular/router';

import { HttpClient } from '@angular/common/http';
import { NotificationService } from '../toastr-notification/toastr-notification.service';
import { Subscription } from 'rxjs';






@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  signInForm: FormGroup;
  submitted = false;  

 email: string =""  ;
  password : any ;
  usersData: any;
  // password: any;
  subscription: Subscription;

  constructor(private formBuilder?: FormBuilder, private router?:Router, private httpClient ?: HttpClient,
    private userService ?: UserService, private _notificationservice ?:NotificationService) { 
      this.usersData = [];

  }

  ngOnInit() {
      this.signInForm = this.formBuilder.group({
          email: ['', [Validators.required, Validators.email]],
          password: ['', Validators.required]
      });

      this.getUsers();

  };

  onSubmit() {
      this.submitted = true;
    console.log(this.email + " --- email is");
    console.log(this.password + "--- password is");


// stop the process here if form is invalid
      if (this.signInForm.invalid) {
          return;
      }
      else
      {
        //this.getUsers();
        let isValid = false;
        this.usersData.forEach(element => {
          if(element.email == this.email && element.password == this.password)
          {
            isValid = true;
            localStorage.setItem("user",JSON.stringify(element));
            this.router.navigateByUrl("/transferDocs");
           return;
          }
        });
        if(!isValid)
        {
          this.showErrorNotification();
        }
      }
    }



  getUsers() {
    //Get saved list of users
    this.userService.getUsersList().subscribe(response => {
     console.log(response);
      this.usersData = response;
    })
  }

  public showSuccessNotification(){  
    this._notificationservice.success("login successfully");  
  }  
  
  public showErrorNotification(){  
    this._notificationservice.error("Invalid userid/password");  
  }  
 

  sendMessage(): void {
    // send message to subscribers via observable subject
    this.userService.sendMessage(this.password);
}

clearMessage(): void {
    // clear message
    this.userService.clearMessage();
}
}
