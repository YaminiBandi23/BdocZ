import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent implements OnInit {
  
  display2Buttons: boolean;
  logoutButtonOnlyDisplay : boolean;
  displayAdminButtons: boolean;
  HightlightUserList : boolean;
  ChangePasswordDisplay: boolean;
  ChangePasswordComponent: boolean;
  LoginComponent: boolean;
  Data: any = [""];
  currentRole: string;

  constructor(private router : Router, private route: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.route.routeConfig.component.name);
    this.Data[0] = JSON.parse(localStorage.getItem("user")).firstName;
console.log(this.Data[0]);
console.log(sessionStorage.getItem('role'));
this.currentRole = sessionStorage.getItem('role');
console.log(this.currentRole);

    if(this.route.routeConfig.component.name=="LoginComponent"){
         this.displayAdminButtons = true;  
         this.HightlightUserList = true;
         this.LoginComponent = true;
          }
    else{
      console.log("test2")
      this.displayAdminButtons = false;

    }
    if(sessionStorage.getItem('role')=="admin"){
      this.display2Buttons = true;
     
    }
    if(sessionStorage.getItem('role')=="superAdmin"){ 
           this.logoutButtonOnlyDisplay = true;

    }
    if(this.route.routeConfig.component.name=="ChangePasswordComponent"){
      console.log("sample");
      this.ChangePasswordComponent = true;  
    }
  
  }

  logout(){
    console.log("dsja");
  sessionStorage.clear();
  this.router.navigateByUrl("/");
  
    }
}
