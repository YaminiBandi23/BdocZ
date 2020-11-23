import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import {Validators,FormControl,FormGroup,FormBuilder} from '@angular/forms';
import {SelectItem} from 'primeng/api';
import { EventEmitterService } from '../event-emitter.service';

@Component({
  selector: 'app-admin-display-list',
  templateUrl: './admin-display-list.component.html',
  styleUrls: ['./admin-display-list.component.css']
})
export class AdminDisplayListComponent implements OnInit {

  userRole;
  displayAllButtons = false;
  displayTwobuttonsOnly = false;
  @Input() role: string;
 @Input() display : boolean;
 addAdminform : FormGroup;
  AdminListComponent: boolean;

 constructor(private router?:Router, private fb ?: FormBuilder, private route ?: ActivatedRoute,
   private eventEmitterService ?: EventEmitterService    
  ) { }    
    
   
  addAdminFunction(){    
    this.eventEmitterService.onAddAdminButtonClick();    
  }    
 
checkModule(){
  if(this.role == 'admin'){
    this.displayTwobuttonsOnly = true;
  }
 
else  if(this.role != 'admin'){
this.displayAllButtons = true;
}
}

  ngOnInit() {
    if(this.route.routeConfig.component.name=='AdminListComponent'){
      this.AdminListComponent = true;
    }    
    if(this.role == 'admin'){
      this.displayTwobuttonsOnly = true;
    }
   
  else  if(this.role != 'admin'){
  this.displayAllButtons = true;
  } 
    
    console.log('this', this.constructor.name);
 this.constructor.name; 
   console.log("role",this.role);

   

    
    this.addAdminform = this.fb.group({
      'firstname': new FormControl('', Validators.required),
      'lastname': new FormControl('', Validators.required),
      'password': new FormControl('', Validators.compose([Validators.required, Validators.minLength(6)])),
      'email': new FormControl(''),
      'phoneNumber': new FormControl('', Validators.required)
  });
  }

  checkStatus(str){
    if(this.router.url.includes(str)){
      return "active";
    }
    return "";
  }

  isAddAdminClicked(){
    this.display=true;
  }
    }