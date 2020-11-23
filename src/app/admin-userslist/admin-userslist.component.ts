import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin-userslist',
  templateUrl: './admin-userslist.component.html',
  styleUrls: ['./admin-userslist.component.css']
})
export class AdminUserslistComponent implements OnInit {

  role:any;
  isSuperAdmin: boolean;
  constructor(private route: ActivatedRoute, private router: Router) {
    // Below will result in MyComponent
    console.log(this.route.routeConfig.component.name);         
  }

  ngOnInit() {
    this.role = sessionStorage.getItem("role");
    console.log(this.role)
    if(this.role=='superAdmin'){
     this.isSuperAdmin = true;
     console.log(this.role)
     console.log("super admin");
     
     }
     else{
       this.isSuperAdmin = false;
       console.log("admin");
     
     }
  }

}


