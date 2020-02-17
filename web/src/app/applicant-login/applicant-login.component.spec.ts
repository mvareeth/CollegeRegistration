import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown'
import { CalendarModule } from 'primeng/calendar';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { AgGridModule } from 'ag-grid-angular';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClient } from '@angular/common/http';
import { AppService } from '../services/app.service';
import { UtilService } from '../services/util.service';
import { MessageService } from 'primeng/api';

import { ApplicantLoginComponent } from './applicant-login.component';
import { SecurityQuestionComponent } from '../security-question/security-question.component';

describe('ApplicantLoginComponent', () => {
  let component: ApplicantLoginComponent;
  let fixture: ComponentFixture<ApplicantLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule, FormsModule, DropdownModule,
        CalendarModule, ConfirmDialogModule, ToastModule,
        AgGridModule.withComponents([])],
      providers: [
        HttpClient, AppService, UtilService, MessageService
      ],
      declarations: [ApplicantLoginComponent, SecurityQuestionComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicantLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
