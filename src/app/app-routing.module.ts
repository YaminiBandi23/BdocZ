import { ChangeProfileComponent } from './change-profile/change-profile.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { LoginComponent } from './login/login.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

import { TransactionReceiptComponent } from './transaction-receipt/transaction-receipt.component';
import { AdminListComponent } from './admin-list/admin-list.component';
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { AdminUserslistComponent } from './admin-userslist/admin-userslist.component';
import { AuthGuardService } from './authGuard';
import { UserchangepasswordComponent } from './userchangepassword/userchangepassword.component';
import { TransferDocsComponent } from './transfer-docs/transfer-docs.component';
import { MyTransactionsLatestComponent } from './my-transactions-latest/my-transactions-latest.component';
import { TestdynamicComponent } from './testdynamic/testdynamic.component';

const routes: Routes = [

    {path:"signin",component:SigninComponent},
    {path:"signup",component:SignupComponent},
    {path:"login/:role",component:LoginComponent},
   // {path:"adminLogin",component:LoginComponent},
    {path:"reset-password",component:ResetPasswordComponent},
    
    {path:"changePassword", component:ChangePasswordComponent},
    {path:"changeProfile", component: ChangeProfileComponent},
   //{path:"", component:LoginComponent},
   {path:"",component:SignupComponent},
    {path:"transactionReceipt", component:TransactionReceiptComponent},
    {path:"adminList",component: AdminListComponent,canActivate:[AuthGuardService]},
    {path:"transactionList",component:TransactionListComponent},
    {path:"addadmin",component: AddAdminComponent},
    {path:"adminUserList",component: AdminUserslistComponent, canActivate:[AuthGuardService]},
     {path:"userPasswordChange",component: UserchangepasswordComponent},
     {path:"transationReceipt", component : TransactionReceiptComponent },
     {path:"transferDocs", component : TransferDocsComponent },
     {path:"myTransactionsLatest", component : MyTransactionsLatestComponent },
     {path:"Testdynamic", component : TestdynamicComponent },

     
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
