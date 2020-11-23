import { UserService } from './../user-service.service';
import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api/selectitem';
import { Users } from '../users';


@Component({
  selector: 'app-userListTable',
  templateUrl: './userListTable.component.html',
  styleUrls: ['./userListTable.component.css']
})
export class UserListTableComponent implements OnInit {
  users: Users[];
datak :any = [];

  // limit: number | undefined;
   rows = [];
  // loadingIndicator = true;
  // reorderable = true;
  // columns = [{ prop: 'id' }, { name: 'email' }, { name: 'password', sortable: true }];

  // ngOnInit() {
  //    this.fetch((data) => {
  //      this.rows = data;
  //    });
  // }
 
  // fetch(cb) {
  //   const req = new XMLHttpRequest();
  //   req.open('GET', `http://localhost:3000/newUsersData`);
 
  //   req.onload = () => {
  //     const data = JSON.parse(req.response);
  //     cb(data);
  //   };
 
  //   req.send();
  // }
 
  

  constructor(private userService: UserService) { }

  ngOnInit() {
    // this.fetch((data) => {
    //   this.rows = data;
    //     });

       this.userService.getUsersList().subscribe((data)=>{
        console.log(data);
        this.datak = data;
        console.log(this.datak);

      });

       }
  

  fetch(cb) {
       const req = new XMLHttpRequest();
       req.open('GET', `http://localhost:3000/newUsersData`);
   
       req.onload = () => {
         const data = JSON.parse(req.response);
         cb(data);
      };


      req.send();

  

    }

   
}
