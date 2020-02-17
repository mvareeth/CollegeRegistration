import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// import { MatButtonModule } from '@angular/material/button';
// import { MatCheckboxModule } from '@angular/material/checkbox';

import { httpInterceptorProviders } from './interceptors';


import { DropdownModule } from 'primeng/dropdown'
import { CalendarModule } from 'primeng/calendar';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

import { AgGridModule } from 'ag-grid-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { StaffLoginComponent } from './staff-login/staff-login.component';
import { PublishRankListComponent } from './publish-rank-list/publish-rank-list.component';
import { ApplicantLoginComponent } from './applicant-login/applicant-login.component';
import { RankListComponent } from './rank-list/rank-list.component';
import { SecurityQuestionComponent } from './security-question/security-question.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { ApplicantListComponent } from './applicant-list/applicant-list.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    StaffLoginComponent,
    PublishRankListComponent,
    ApplicantLoginComponent,
    RankListComponent,
    SecurityQuestionComponent,
    PageNotFoundComponent,
    AppHeaderComponent,
    AppFooterComponent,
    ApplicantListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    //MatButtonModule, MatCheckboxModule,

    DropdownModule, CalendarModule, ConfirmDialogModule, ToastModule,

    AgGridModule.withComponents([])
  ],
  exports: [
    DropdownModule, CalendarModule, ConfirmDialogModule, ToastModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [httpInterceptorProviders, ConfirmationService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
