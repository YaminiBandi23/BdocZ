import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  role:any;
  displayAdminFooter: boolean;
  constructor(private route: ActivatedRoute, private router: Router) {
    // Below will result in MyComponent
    console.log(this.route.routeConfig.component.name);         
  }

  ngOnInit() {

    if(this.route.routeConfig.component.name=='LoginComponent' || this.route.routeConfig.component.name=='SigninComponent' || this.route.routeConfig.component.name=='SignupComponent' ){
      this.displayAdminFooter = false;
    }

    else if (sessionStorage.getItem("role") !="admin" &&
      sessionStorage.getItem("role") != "superAdmin" ){
        console.log("true");
      this.displayAdminFooter = false;

    }
    else{
      this.displayAdminFooter = true;

    }
    this.role = sessionStorage.getItem("role");
    console.log(sessionStorage.getItem("role"));
  }


}

