import { Component } from '@angular/core';
import { UserHeadderComponent } from './user-headder/user-headder.component';
import { HeaderComponent } from './header/header.component';
import {TableModule} from 'primeng/table';
import {CalendarModule} from 'primeng/calendar';
import {TooltipModule} from 'primeng/tooltip';
import {ButtonModule} from 'primeng/button';
import { UserchangepasswordComponent } from './userchangepassword/userchangepassword.component';
import {DialogModule} from 'primeng/dialog';
import { MessageService } from 'primeng/api';
import { ProgressBarModule } from 'primeng/progressbar';
import { InputTextModule } from 'primeng/inputtext';
import {SliderModule} from 'primeng/slider';
import {FileUploadModule} from 'primeng/fileupload';
import {SplitButtonModule} from 'primeng/splitbutton';
import {DropdownModule} from 'primeng/dropdown';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';
import { SuperAdminDisplayListComponent } from './super-admin-display-list/super-admin-display-list.component';
import { TransferDocsComponent } from './transfer-docs/transfer-docs.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {TabViewModule} from 'primeng/tabview';
import { TabMenuModule } from 'primeng/tabmenu';


import { BrowserModule } from '@angular/platform-browser';
import { RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ConfirmEqualValidatorDirective } from './signup/confirm-equal-validator.directive';

import { TransactionReceiptComponent } from './transaction-receipt/transaction-receipt.component';
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import { ResetPasswordMailComponent } from './reset-password-mail/reset-password-mail.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ResetNewPasswordComponent } from './reset-new-password/reset-new-password.component';
import { MyTransactionsLatestComponent } from './my-transactions-latest/my-transactions-latest.component';
import { LoginComponent } from './login/login.component';
import { DeleteAdminComponent } from './delete-admin/delete-admin.component';
import { ChangeProfileComponent } from './change-profile/change-profile.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { AdminUserslistComponent } from './admin-userslist/admin-userslist.component';
import { AdminTransactionListComponent } from './admin-transaction-list/admin-transaction-list.component';
import { AdminResetPasswordMailComponent } from './admin-reset-password-mail/admin-reset-password-mail.component';
import { AdminResetPasswordComponent } from './admin-reset-password/admin-reset-password.component';
import { AdminResetNewPasswordComponent } from './admin-reset-new-password/admin-reset-new-password.component';
import { AdminListComponent } from './admin-list/admin-list.component';
import { AdminChangePasswordComponent } from './admin-change-password/admin-change-password.component';
import { AddAdminComponent } from './add-admin/add-admin.component';
 import { NgModule } from '@angular/core';
 import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule  } from '@angular/common/http';
import { UserService } from './user-service.service';
import { NotificationModule } from './toastr-notification/toastr.notification.module';

import { FooterComponent } from './footer/footer.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminDisplayListComponent } from './admin-display-list/admin-display-list.component';
import { UserListTableComponent } from './UserListTable/UserListTable.component';
import { AuthGuardService } from './authGuard';
import { TestdynamicComponent } from './testdynamic/testdynamic.component';



@NgModule({
  imports: [
    BrowserModule,  AppRoutingModule, InputTextModule, SliderModule, FileUploadModule, SplitButtonModule, DropdownModule,
    ConfirmDialogModule, TabViewModule, TabMenuModule,FlexLayoutModule, RouterModule,
     FormsModule, BrowserAnimationsModule, ReactiveFormsModule, HttpClientModule , DialogModule, ProgressBarModule,
     NotificationModule, TableModule, TooltipModule,ButtonModule, CalendarModule
  ],
 
 

  declarations: [
    HeaderComponent,
    AppComponent,
    UserHeadderComponent,
    
    AdminHeaderComponent,
    SigninComponent,
    SignupComponent,
    ConfirmEqualValidatorDirective,
    
    TransactionReceiptComponent,
    TransactionListComponent,
    ResetPasswordMailComponent,
    ResetPasswordComponent,
    ResetNewPasswordComponent,
    MyTransactionsLatestComponent,
    LoginComponent,
    DeleteAdminComponent,
    ChangeProfileComponent,
    ChangePasswordComponent,
    AdminUserslistComponent,
    AdminTransactionListComponent,
    AdminResetPasswordMailComponent,
    AdminResetPasswordComponent,
    AdminResetNewPasswordComponent,
    AdminListComponent,
    AdminChangePasswordComponent,
    AddAdminComponent,
    FooterComponent,
    AdminDisplayListComponent,
    UserListTableComponent,  UserchangepasswordComponent, SuperAdminDisplayListComponent, TransferDocsComponent, TestdynamicComponent
    
  ],





  
 
  providers: [UserService,AuthGuardService, MessageService, ConfirmationService


  ],



  bootstrap: [AppComponent]
})
export class AppModule { }
