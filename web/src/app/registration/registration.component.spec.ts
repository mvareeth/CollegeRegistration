import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown'
import { CalendarModule } from 'primeng/calendar';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { AgGridModule } from 'ag-grid-angular';

import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { HttpClient } from '@angular/common/http';
import { AppService } from '../services/app.service';
import { UtilService } from '../services/util.service';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';

import { RegistrationComponent } from './registration.component';

describe('RegistrationComponent', () => {
  let component: RegistrationComponent;
  let fixture: ComponentFixture<RegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule, FormsModule, DropdownModule, CalendarModule,
        ConfirmDialogModule, ToastModule, AgGridModule.withComponents([])],
      providers: [
        HttpClient, AppService, UtilService, ConfirmationService, MessageService
      ],
      declarations: [RegistrationComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
