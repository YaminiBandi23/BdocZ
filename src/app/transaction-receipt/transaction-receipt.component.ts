import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transaction-receipt',
  templateUrl: './transaction-receipt.component.html',
  styleUrls: ['./transaction-receipt.component.css']
})
export class TransactionReceiptComponent implements OnInit {
  value1: "test";
  data = [{
    senderFirstName: 'ravi',
    senderLastName: 'kumar',
    senderEmail : 'ravi@gmail.com',
    receiverFirstName: 'syam',
    receiverLastName: 'prasad',
    receiverEmail : 'syam.prasad@gmail.com',
    documentName : 'Bdocz Transaction',
    senderAddress : 'madhapur Hyd TS India',
    receiverAddress : 'kondapur, Hyd, TS India'

  },
  
]

  constructor() { }

  ngOnInit() {
  
  }

}
