import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

import { AppService } from '../services/app.service';
import { AcademicYear } from '../model/academic-year.model';
import { ApplicantList } from '../model/applicant-list.model';


@Component({
  selector: 'app-applicant-list',
  templateUrl: './applicant-list.component.html',
  styleUrls: ['./applicant-list.component.css']
})
export class ApplicantListComponent implements OnInit {

  public showAcadamicYears: boolean;
  public isApplicant = false;
  public academicYearList: AcademicYear[];
  public selectedAcademicYear: AcademicYear;
  public applicantList: ApplicantList[];

  private gridColumnApi;
  public applicantListColumnDefs = [];
  public applicantListGridApi: any;

  constructor(private location: Location, private router: Router, public appService: AppService) {
    if (this.appService.loggedInStaff) {
      this.showAcadamicYears = true;
      this.getListOfAcademicYears();
    } else {
      this.router.navigateByUrl('admission');
    }
  }

  ngOnInit() {
  }

  private getListOfAcademicYears() {
    this.appService.getAcademicYearsByCollege(this.appService.selectedCollegeId)
      .subscribe(data => {
        this.academicYearList = data.filter(os => os.Active);
      });
  }

  private getApplicantlistByCollege() {
    let slno = 1;
    this.appService.getApplicantlistByCollege(this.appService.selectedCollegeId, this.selectedAcademicYear.Id)
      .subscribe(data => {
        this.applicantList = data;
        for (let r of this.applicantList) {
          r.SlNo = slno++;
          if (r.IsRegistrationCompleted) {
            r.Status = 'Completed';
          } else {
            r.Status = 'Draft';
          }
        }
      });
  }

  public back() {
    this.location.back();
  }
  public viewApplicantList() {
    this.showAcadamicYears = false;
    this.applicantListGrid();
    this.getApplicantlistByCollege();
  }
  public onGridReady(params) {
    this.applicantListGridApi = params.api;
    this.gridColumnApi = params.columnApi;

    params.api.sizeColumnsToFit();
  }

  private applicantListGrid() {
    this.applicantListColumnDefs = [
      {
        headerName: 'Slno',
        field: 'SlNo',
        width: 70
      },
      {
        headerName: 'First Name',
        field: 'FirstName',
        filter: true,
        resizable: true
      },
      {
        headerName: 'Middle Name',
        field: 'MiddleName',
        width: 120,
        resizable: true
      },
      {
        headerName: 'Last Name',
        field: 'LastName',
        filter: true,
        resizable: true
      },
      {
        headerName: 'Course',
        field: 'CourseName',
        filter: true,
        resizable: true
      },
      {
        headerName: 'Category',
        field: 'Quota',
        filter: true,
        width: 170,
        resizable: true
      },
      {
        headerName: 'Application Status',
        field: 'Status',
        filter: true,
        resizable: true
      },
      {
        headerName: 'ApplicantId',
        field: 'Id',
        hide: true
      },
    ];
  }
}
