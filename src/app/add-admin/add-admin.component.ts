import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NotificationService } from '../toastr-notification/toastr-notification.service';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../user-service.service';
import { MustMatch } from '../_helpers/must-watch.validator';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css']
})
export class AddAdminComponent implements OnInit {
  addAdminForm: FormGroup;
  addAdminDetails = {};
  role:any;
  submitted: boolean;
  constructor(private route: ActivatedRoute, private router: Router,  private _notificationservice ?:NotificationService,
    private httpClient?: HttpClient,
    private formBuilder?: FormBuilder,
    private  userService?: UserService
    ) {
    // Below will result in MyComponent
    console.log(this.route.routeConfig.component.name);         
  }

  ngOnInit() {
    this.role = sessionStorage.getItem("role");
    console.log(this.role);
    }

    onSubmit() {
      this.submitted = true;

      // stop the process here if form is invalid
      if (this.addAdminForm.invalid) {
        return;
      }

      console.log(this.addAdminDetails);
      
      this.addAdminForm = this.formBuilder.group(
        {
          firstName: ["", Validators.required],
          lastName: ["", Validators.required],
          phoneNumber: ["", [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
          password: ["", [Validators.required, Validators.minLength(8)]],
          confirmPassword: ["", Validators.required],
          email: ["", [Validators.required, Validators.email]],
          confirmEmail: ["", Validators.required]
    
    
    
        },
        
        {
         // validator: MustMatch("password", "confirmPassword"),
          Validator : MustMatch ("email", "confirmEmail")
        },
        
        );
}
changePhoneNumberState(e){
  e.target.value = e.target.value.replace(/(\d{3})\ ?(\d{3})\-?(\d{4})/,'$1-$2-$3');
}

public showSuccessNotification(){  
  this._notificationservice.success("New Admin Added successfully");  
  this.addAdminForm.reset();

}  
cancelAdminForm(e){
  this.addAdminForm.reset();
}

}
