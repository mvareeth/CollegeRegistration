import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DropdownModule } from 'primeng/dropdown'
import { CalendarModule } from 'primeng/calendar';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { AgGridModule } from 'ag-grid-angular';
import { FormsModule } from '@angular/forms';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';
import { AppService } from '../services/app.service';
import { UtilService } from '../services/util.service';

import { RankListComponent } from './rank-list.component';

describe('RankListComponent', () => {
  let component: RankListComponent;
  let fixture: ComponentFixture<RankListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule, FormsModule,
        DropdownModule, CalendarModule, ConfirmDialogModule, ToastModule,
        AgGridModule.withComponents([])],
      providers: [
        HttpClient, Location, AppService, UtilService
      ],
      declarations: [RankListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RankListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
