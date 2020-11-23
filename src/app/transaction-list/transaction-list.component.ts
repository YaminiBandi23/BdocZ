import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user-service.service';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent implements OnInit {

  transactionsData : any;
    cols: any[];
  role: any;
  isSuperAdmin: boolean;


    constructor(private userService : UserService) { }

    ngOnInit() {

      this.userService.getTransactionsListAdmins().subscribe(response => {
        console.log(response);
         this.transactionsData = response;
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
       })


            this.cols = [
              {field: 'id', header: 'ID'},
              {field: 'email', header: 'Email'},
                { field: 'senderName', header: 'Sender Name'},
                { field: 'receiverName', header: 'Receiver Name' },
                { field: 'nameOfDocument', header: 'Document Name' },
                { field: 'date', header: 'Date'},
                { field: 'time', header: 'Time' },
                { field: 'hashValue', header: 'Hash value' }

            ];
        }



}
