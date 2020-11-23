import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-super-admin-display-list',
  templateUrl: './super-admin-display-list.component.html',
  styleUrls: ['./super-admin-display-list.component.css']
})
export class SuperAdminDisplayListComponent implements OnInit {
  AdminListComponent: boolean;

  constructor(private router?:Router, private route ?: ActivatedRoute)
    { }

  ngOnInit() {
    if(this.route.routeConfig.component.name == "AdminListComponent"){
      this.AdminListComponent = true;
    }
    else{
      this.AdminListComponent = false;

    }
  }

}
