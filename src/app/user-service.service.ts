import { Users } from './users';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, BehaviorSubject, Subject } from 'rxjs';
import { retry, catchError, map, tap } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseurl = 'http://localhost:3000/users';
  newUsersurl = 'http://localhost:3000/newUsersData';
  adminUrl = 'http://localhost:3000/Admins';
  superAdminUrl = 'http://localhost:3000/SuperAdmins';
  myTransactionsUrlUsers =  'http://localhost:3000/myTransactions' ;
  transactionListAdmins = "http://localhost:3000/transactionReport";
  newTransaction = "http://localhost:3000/newTransaction";

  private subject = new Subject<any>();

  constructor(private http: HttpClient) { }

  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  // Post Users data
   addUsers(data): Observable<Users> {
     return this.http.post<Users>(this.newUsersurl, JSON.stringify(data), this.httpOptions)
     .pipe(
       retry(1),
       catchError(this.errorHandl)
     )
   } 
  

 //Get Users data
 getUsersList(): Observable<Users> {
  return this.http.get<Users>(this.newUsersurl)
    .pipe(
      retry(2),
      catchError(this.errorHandl)
    )
}



// Get Admin Users data
getAdminList(): Observable<Users> {
  return this.http.get<Users>(this.adminUrl)
    .pipe(
      retry(2),
      catchError(this.errorHandl)
    )
}

 // Post Admin list
 addAdmins(data): Observable<Users> {
  return this.http.post<Users>(this.adminUrl, JSON.stringify(data), this.httpOptions)
  .pipe(
    retry(1),
    catchError(this.errorHandl)
  )
} 

// Post New Transaction
addNewTransaction(data):Observable<any>{
  return this.http.post<any>(this.newTransaction, JSON.stringify(data), this.httpOptions)
  .pipe(tap(data=>console.log(data)),
  catchError(this.errorHandl))
}


// Get Super Admin Users data
getSuperAdminList(): Observable<Users> {
  return this.http.get<Users>(this.superAdminUrl)
    .pipe(
      retry(2),
      catchError(this.errorHandl)
    )
}

   // Error handling
   errorHandl(error) {
     let errorMessage = '';
     if(error.error instanceof ErrorEvent) {
       // Get client-side error
       errorMessage = error.error.message;
     } else {
       // Get server-side error
       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
     }
     console.log(errorMessage);
     return throwError(errorMessage);
  }

  private messageSource = new BehaviorSubject('default message');
  currentMessage = this.messageSource.asObservable();

  changeMessage(email: string) {
    this.messageSource.next(email)
  }

  
  sendMessage(message: string) {
    this.subject.next({ text: message });
}

clearMessage() {
    this.subject.next();
}

getMessage(): Observable<any> {
    return this.subject.asObservable();
}


getMyTransactionsList() : Observable<any> {
  return this.http.get<Users>(this.myTransactionsUrlUsers)
    .pipe(
      retry(2),
      catchError(this.errorHandl)
    )
}

getTransactionsListAdmins(): Observable<Users> {
  return this.http.get<Users>(this.transactionListAdmins)
    .pipe(
      retry(2),
      catchError(this.errorHandl)
    )
}


getTransaction(): Observable<any> {
  return this.http.get('http://localhost:3000/newTransaction').pipe(
      retry(2),
      catchError(this.errorHandl)
    )
}


}
