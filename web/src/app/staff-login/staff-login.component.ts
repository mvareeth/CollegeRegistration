import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../services/app.service';
import { UtilService } from '../services/util.service';

import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { AcademicYear } from '../model/academic-year.model';

@Component({
  selector: 'app-staff-login',
  templateUrl: './staff-login.component.html',
  styleUrls: ['./staff-login.component.css']
})
export class StaffLoginComponent implements OnInit {

  public userName: string;
  public password: string;
  // public welcomeMessage: string;

  public isShowLoginView: boolean;
  public isShowProcessRankList: boolean;
  public enableProcessRankList: boolean;

  public nonPublishedAcademicYear: AcademicYear[];

  constructor(private router: Router, public appService: AppService, private utilService: UtilService,
    private confirmationService: ConfirmationService, private messageService: MessageService) {
    this.appService.loggedInStaff = undefined;
    this.isShowLoginView = true;
    this.isShowProcessRankList = false;
    this.enableProcessRankList = false;
  }

  ngOnInit() {
  }

  public get enableLoginButton(): boolean {
    return !this.utilService.isNullOrUndefined(this.userName) && !this.utilService.isNullOrUndefined(this.password);
  }

  public login() {
    this.appService.
      staffLogin(this.userName, this.password)
      .subscribe(data => {
        if (Array.isArray(data) && data.length > 0) {
          this.appService.loggedInStaff = data[0];
          console.log('Logged-in Sucessfully');
          this.getNonPublishedAcademicYear();
          this.isShowLoginView = false;
          this.isShowProcessRankList = true;
        } else {
          this.messageService.add({ severity: 'error', summary: 'Invalid Credentials' });
        }
      });
  }

  public viewResult() {
    this.router.navigateByUrl('/rank-list');
  }

  public viewApplicant() {
    this.router.navigateByUrl('/applicant-list');
  }

  public processRankList() {
    // process rank list for the current academic year.
    this.confirmationService.confirm({
      message: 'Are you sure that you want to process rank list for ' + this.nonPublishedAcademicYear[0].Year + ' ?',
      accept: () => {
        this.appService.processRankList(this.nonPublishedAcademicYear[0].Id)
          .subscribe(data => {
            if (data) {
              this.messageService.add({ severity: 'success', summary: 'Rank list processed successfully' });
              this.router.navigateByUrl('/rank-list');
            }
          });
      }
    });
  }

  private getNonPublishedAcademicYear() {
    this.appService.getAcademicYearsByCollege(this.appService.selectedCollegeId)
      .subscribe(data => {
        this.nonPublishedAcademicYear = data.filter(os => os.Active && !os.IsRankListPubllshed);
        if (this.nonPublishedAcademicYear.length > 0) {
          this.enableProcessRankList = true;
        }
      });
  }

}
