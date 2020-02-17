import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

import { AppService } from '../services/app.service';
import { AcademicYear } from '../model/academic-year.model';
import { RankList } from '../model/rank-list.model';

@Component({
  selector: 'app-rank-list',
  templateUrl: './rank-list.component.html',
  styleUrls: ['./rank-list.component.css']
})
export class RankListComponent implements OnInit {

  public showAcadamicYears: boolean;
  public isApplicant = false;
  public academicYearList: AcademicYear[];
  public selectedAcademicYear: AcademicYear;
  public selectedApplicantId: number;
  public rankList: RankList[];

  private gridColumnApi;
  public rankListColumnDefs = [];
  public rankListGridApi: any;
  // public rankListGridOptions: any;

  constructor(private location: Location, private router: Router, public appService: AppService) {
    if (this.appService.currentApplication) {
      this.isApplicant = true;
      this.selectedApplicantId = this.appService.currentApplication.ApplicantId;
      this.showAcadamicYears = false;
      this.rankListGrid();
      this.getRanklistByApplicant();
    } else if (this.appService.loggedInStaff) {
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
        this.academicYearList = data.filter(os => os.Active && os.IsRankListPubllshed);
      });
  }

  private getRanklistByCollege() {
    let slno = 1;
    this.appService.getRanklistByCollege(this.appService.selectedCollegeId, this.selectedAcademicYear.Id)
      .subscribe(data => {
        this.rankList = data;
        for (let r of this.rankList) {
          r.SlNo = slno++;
        }
      });
  }

  private getRanklistByApplicant() {
    this.appService.getRanklistByApplicant(this.selectedApplicantId)
      .subscribe(data => {
        this.rankList = data;
      });
  }

  public back() {
    this.location.back();
  }
  public viewRankList() {
    this.showAcadamicYears = false;
    this.rankListGrid();
    this.getRanklistByCollege();
  }
  public onGridReady(params) {
    this.rankListGridApi = params.api;
    this.gridColumnApi = params.columnApi;

    params.api.sizeColumnsToFit();
  }

  private rankListGrid() {
    this.rankListColumnDefs = [
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
        resizable: true
      },
      {
        headerName: 'Status',
        field: 'Status',
        filter: true,
        resizable: true
      },
      {
        headerName: 'Rank',
        field: 'QuotaRankNumber'
      },
      {
        headerName: 'RankId',
        field: 'RankId',
        hide: true
      },
    ];
  }
}
