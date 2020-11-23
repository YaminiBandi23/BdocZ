import { Component, OnInit } from '@angular/core';
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router } from '@angular/router';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  model: NgbDateStruct;
  date: {year: number, month: number};
  Signin = true;
  displayButtons: boolean;

  constructor(private route: ActivatedRoute, private router: Router) {
    // Below will result in MyComponent
    console.log(this.route.routeConfig.component.name);         
  }


  ngOnInit(){  
    if( this.route.routeConfig.component.name=='SigninComponent' || this.route.routeConfig.component.name=='SignupComponent' ){
      this.displayButtons = true;
    }
    else{
      this.displayButtons = false;

    }

    
  }

}
