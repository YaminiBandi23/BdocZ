import { Signin } from './signin/signin';
import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'bdocz';
  model: NgbDateStruct;
  date: {year: number, month: number};
Signin = true;
signOut = false;
  constructor(private calendar: NgbCalendar) {
  }

  ngOnInit(){
  
  }
  selectToday() {
    this.model = this.calendar.getToday();
}

signInChange(event){
  console.log("test1");
    this.Signin = true;
    this.signOut = false;

  }
 
  signOutChange(event){
    console.log("test2");
    this.Signin = false;
    this.signOut = true;
  }
}
