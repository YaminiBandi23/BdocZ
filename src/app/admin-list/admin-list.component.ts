import { Message, ConfirmationService } from 'primeng/api';
import { AddAdminComponent } from './../add-admin/add-admin.component';
import { Component, OnInit, Input } from '@angular/core';
import { Routes, Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../user-service.service';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import { NotificationService } from '../toastr-notification/toastr-notification.service';
import { EventEmitterService } from '../event-emitter.service';    

const routes: Routes = [
  {path:"addadmin",component: AddAdminComponent}
];


@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.css']
})
export class AdminListComponent implements OnInit {
  displayAllButtons : boolean;
  limit: number | undefined;
  rows = [];
  loadingIndicator = true;
  reorderable = true;
  columns = [{ prop: 'id' }, { name: 'email' }, { name: 'password', sortable: true }];
  role:any;
datak :any ={};
rowCopy:any = {};
cloneddata:any = {};
msgs: Message[] = [];
  display: boolean;
  addAdmin :any ={};
  AdminListComponent: boolean;

  constructor(private route: ActivatedRoute, private router: Router, private userService : UserService,
    private _notificationservice ?:NotificationService, private eventEmitterService ?: EventEmitterService ) {
    // Below will result in MyComponent
    console.log(this.route.routeConfig.component.name);    
  
  }

  
  addAdminClicked() {    
this.showDialog();     
  }  
  
  ngOnInit() {
    
    if (this.eventEmitterService.subsVar==undefined) {    
      this.eventEmitterService.subsVar = this.eventEmitterService.    
      invokeAddAdminComponentFunction.subscribe((isAddAdminClicked: boolean) => {    
        this.addAdminClicked();    
      });    
    }   
   // console.log("main component");
    // this.fetch((data) => {
    //   this.rows = data;
    // });
    this.userService.getAdminList().subscribe((data)=>{
      console.log(data);
      this.datak = data;
      console.log(this.datak);

    });
    this.role = sessionStorage.getItem("role");

    console.log(this.route.routeConfig.component.name);         
    console.log(sessionStorage.getItem('role'));
if(sessionStorage.getItem('role')=="superAdmin"){
  this.displayAllButtons = true;
console.log("true");
}
else if(sessionStorage.getItem('role')=="admin"){
  this.displayAllButtons = true;
console.log("true");
}
else{
  console.log("false");
  this.displayAllButtons = false;

}
  }
 
  onRowEditInit(rowData, rInt) {
    this.datak[rInt] = JSON.parse(JSON.stringify(rowData, rInt));
    this.rowCopy = Object.assign({},JSON.parse(JSON.stringify(rowData, rInt)));    
    console.log(this.datak[rInt]);
  
}

onRowEditSave(rowData, rs){
  this.datak[rs] = JSON.parse(JSON.stringify(rowData, rs)); 
  if(JSON.stringify(this.rowCopy) === JSON.stringify(this.datak[rs]))
  {
    console.log("data not modified");
  }
  else{
    console.log("data  modified");
    setTimeout( () => 1000 );
    this.showSuccessNotification();
  }
  
 // console.log(JSON.parse(JSON.stringify(rowData, rs)));
 // console.log("sdsd",this.datak);
  
}

onRowEditCancel(rowData, rc){
  console.log(this.cloneddata,rc);
  this.datak[rc] = JSON.parse(JSON.stringify(this.cloneddata));    
  
}

public showSuccessNotification(){  
  this._notificationservice.success("Admin Data Modified");  
}  

onRowDelete(rowData, rInt) {

  this.datak = this.datak.filter(data=>data.id !=rowData.id);
  setTimeout( () => 1000 );
  this._notificationservice.success("Admin Deleted Successfully");  
  //this.datak[rInt] = JSON.parse(JSON.stringify(rowData, rInt));
      
  //console.log(this.datak[rInt]);

}

showDialog() {
  this.display = true;
}

save(){
 this.addAdmin.id = this.datak.length+1;
 this.datak.push(Object.assign({}, this.addAdmin));
  console.log(this.datak);
  console.log(this.addAdmin);
  this.userService.addAdmins(this.datak).subscribe((data)=>{
    console.log(data);
    this.datak = data;
    console.log(this.datak);

  });
}

}
