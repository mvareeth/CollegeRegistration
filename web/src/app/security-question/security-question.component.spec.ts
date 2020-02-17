import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown'
import { CalendarModule } from 'primeng/calendar';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { AgGridModule } from 'ag-grid-angular';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { AppService } from '../services/app.service';
import { UtilService } from '../services/util.service';

import { SecurityQuestionComponent } from './security-question.component';

describe('SecurityQuestionComponent', () => {
  let component: SecurityQuestionComponent;
  let fixture: ComponentFixture<SecurityQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule, FormsModule, DropdownModule,
        CalendarModule, ConfirmDialogModule, ToastModule,
        AgGridModule.withComponents([])],
      providers: [
        HttpClient, AppService, UtilService
      ],
      declarations: [SecurityQuestionComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecurityQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
