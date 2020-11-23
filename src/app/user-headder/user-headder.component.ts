import { ChangeProfileComponent } from './../change-profile/change-profile.component';
import { Component, OnInit } from '@angular/core';
import { Routes, Router } from '@angular/router';
import { ChangePasswordComponent } from '../change-password/change-password.component';
import { SigninComponent } from '../signin/signin.component';
import { MyTransactionsLatestComponent } from '../my-transactions-latest/my-transactions-latest.component';
import {MenuItem} from 'primeng/api';

const routes: Routes = [
  {path:"changePassword", component:ChangePasswordComponent},
  {path:"changeProfile", component: ChangeProfileComponent},
  {path:"signin",component:SigninComponent},
  {path:"myTransactionsLatest", component : MyTransactionsLatestComponent}


];
@Component({
  selector: 'app-user-headder',
  templateUrl: './user-headder.component.html',
  styleUrls: ['./user-headder.component.css']
})

export class UserHeadderComponent implements OnInit {
  Data: any = ["", "Change Password", "Change Profile", "Logout"];
  activeIndex: number = 0;
  items: MenuItem[];
  

  constructor( private router?: Router ) { }

  ngOnInit() {
    this.Data[0] = JSON.parse(localStorage.getItem("user")).email;
    this.items = [
      {label: 'New Transaction', routerLink: ['/transferDocs']},
      {label: 'My Transactions', routerLink: ['/myTransactionsLatest']}
  ];
  }

  changeData(e){
    console.log(e.target.value);
    if(e.target.value == "Change Password"){
      this.router.navigateByUrl("/userPasswordChange");
    }
    if(e.target.value == "Change Profile"){
      this.router.navigateByUrl("/changeProfile");
    }
    if(e.target.value == "Logout"){
      this.router.navigateByUrl("/signin");
    }
  }

  submit(){
    this.router.navigateByUrl("myTransactionsLatest");
  }

}
