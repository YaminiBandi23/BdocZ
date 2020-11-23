import { AdminUserslistComponent } from "./../admin-userslist/admin-userslist.component";
import { UserService } from "./../user-service.service";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router, Routes, ActivatedRoute } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { NotificationService } from "../toastr-notification/toastr-notification.service";

const routes: Routes = [
  { path: "adminUserList", component: AdminUserslistComponent }
];

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  email: string = "";
  password: string = "";
  usersData: any;
  role:any = "";
  displayButtons: boolean;

  constructor(private route: ActivatedRoute, 
    private formBuilder?: FormBuilder,
    private router?: Router,
    private httpClient?: HttpClient,
    private userService?: UserService,
    private _notificationservice?: NotificationService,
    private activeRoute?: ActivatedRoute
  ) {
    this.usersData = [];
  }

  ngOnInit() {
    
    this.activeRoute.paramMap.subscribe((params: any) => {
      console.log()
      this.role = params.params.role;
      console.log("lljjjjjjjjj",params.params.role);
    });

    this.loginForm = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", Validators.required]
    });

    if (this.role == "superAdmin") {
      this.getsuperadminList();
      console.log("test2");

    } else {
      this.getUsers();
      console.log("test1");
    }
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.email + " --- email is");
    console.log(this.password + "--- password is");

    // stop the process here if form is invalid
    if (this.loginForm.invalid) {
      return;
    } 
    else {
      let isValid = false;
      this.usersData.forEach(element => {
        if (element.email == this.email && element.password == this.password) {
          isValid = true;
          sessionStorage.setItem("user", JSON.stringify(element));
          sessionStorage.setItem("role", this.role);
          console.log(sessionStorage.getItem("role"));
          localStorage.setItem("user", JSON.stringify(element));
          if (this.role == "superAdmin") {
          this.router.navigateByUrl("/adminList");
          }
          if (this.role == "admin") {
            this.router.navigateByUrl("/adminUserList");
            }
          return;
        }
      });
      if (!isValid) {
        this.showErrorNotification();
      }
    }
  }

  getsuperadminList() {
    this.userService.getSuperAdminList().subscribe(response => {
      console.log(response);
      this.usersData = response;
    });
  }

  getUsers() {
    //Get saved list of users
    this.userService.getAdminList().subscribe(response => {
      console.log(response);
      this.usersData = response;
    });
  }

  public showSuccessNotification() {
    this._notificationservice.success("login successfully");
  }

  public showErrorNotification() {
    this._notificationservice.error("Invalid userid/password");
  }
}
