import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../user-service.service';
import {MyTransactionsLatest} from '../my-transactions-latest/MyTransactions';

@Component({
  selector: 'app-my-transactions-latest',
  templateUrl: './my-transactions-latest.component.html',
  styleUrls: ['./my-transactions-latest.component.css']
})
export class MyTransactionsLatestComponent implements OnInit {

 transactionsData : any;
    cols: any[];
    mytransactionsReceiptDialog: boolean;
    Transactions : MyTransactionsLatest[];
    transaction : MyTransactionsLatest ;
  dataSet: any;
  @Input() logic: any;
  selectedRow: any;
  hashValue: any;
  sentOn: any;
  sentFrom: any;
  documentName: any;
  ethersBalance: any;
  sentTo: any;
 



    constructor(private userService : UserService) { }

    ngOnInit() {

      this.userService.getMyTransactionsList().subscribe(response => {
        console.log(response);
         this.transactionsData = response;
       }
       )

            this.cols = [
                { field: 'sentOn', header: 'Sent On' },
                { field: 'sentFrom', header: 'Sent From' },
                { field: 'sentTo', header: 'Sent To' },
                { field: 'documentName', header: 'Document Name' },
                { field: 'ethersBalance', header: 'Ethers Balance' },
                { field: 'status', header: 'Status' },
                { field: 'hashValue', header: 'HashValue' }


            ];
        }

        viewReceipt(rowData) {
         console.log(rowData);
         this.mytransactionsReceiptDialog = true;
         this.selectedRow = rowData;
         console.log(this.selectedRow);
        console.log (this.selectedRow.hashValue); 
        this.hashValue =  this.selectedRow.hashValue;
        this.sentOn = this.selectedRow.sentOn;
        this.sentFrom = this.selectedRow.sentFrom;
        this.sentTo = this.selectedRow.sentTo;
        this.documentName = this.selectedRow.documentName;
        this.ethersBalance = this.selectedRow.ethersBalance;


      }

    
      
        }

