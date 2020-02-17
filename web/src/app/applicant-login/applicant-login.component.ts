import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../services/app.service';
import { UtilService } from '../services/util.service';
import { tryParse } from 'selenium-webdriver/http';
import { SecurityQuestionComponent } from '../security-question/security-question.component';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-applicant-login',
  templateUrl: './applicant-login.component.html',
  styleUrls: ['./applicant-login.component.css']
})
export class ApplicantLoginComponent implements OnInit {
  @ViewChild('secQuestions', { static: false }) secQuestions: SecurityQuestionComponent;
  public applicationNumber: string;
  public firstName: string;
  public middleName: string;
  public lastName: string;
  public dateOfBirth: Date;

  public maxDate: Date;

  public isShowViewResult = false;
  public isShowSecQuestion = false;
  public isExistingApplicant = false;

  constructor(private router: Router, private messageService: MessageService,
    private appService: AppService, private utilService: UtilService) {
    this.maxDate = this.utilService.minimumDateofBirth;
    this.dateOfBirth = this.maxDate;
    this.appService.currentApplication = undefined;
  }

  ngOnInit() {
  }

  public get enableSubmitButton(): boolean {
    return this.appService.isNotEmptyApplicationParameters(this.applicationNumber, this.firstName,
      this.middleName, this.lastName, this.dateOfBirth);
  }

  public submit() {
    console.log('submit clicked');
    this.appService.
      validateApplicationParameters(this.applicationNumber, this.firstName, this.middleName, this.lastName, this.dateOfBirth)
      .subscribe(data => {
        if (Array.isArray(data) && data.length > 0) {
          this.appService.currentApplication = data[0];

          if (this.appService.currentApplication.ApplicantId) {
            this.isExistingApplicant = true;

            if (this.appService.currentApplication.IsRankListPubllshed) {
              this.isShowViewResult = true;
            } else if (this.utilService.today > new Date(this.appService.currentApplication.LastDateofApplication)) {
              this.isShowSecQuestion = true;
              this.appService.canEditCurrentApplication = false; // date over; editing is not allowed
            } else {
              this.appService.canEditCurrentApplication = true;
              this.isShowSecQuestion = true;
            }

          } else {
            if (this.utilService.today > new Date(this.appService.currentApplication.LastDateofApplication)) {
              this.messageService.add({ severity: 'error', summary: 'Application date is over' });
            } else {
              this.appService.canEditCurrentApplication = true;
              this.isShowSecQuestion = true;
            }
          }

        } else {
          this.messageService.add({ severity: 'error', summary: 'Invalid Application Details' });
        }
      });
  }

  public get enableLoginButton(): boolean {
    return this.secQuestions !== undefined &&
      this.secQuestions.selectedQuestion1 !== undefined &&
      this.secQuestions.selectedQuestion2 !== undefined &&
      this.secQuestions.selectedQuestion3 !== undefined &&
      this.appService.isNotEmptyApplicantCredential(this.applicationNumber, this.firstName,
        this.middleName, this.lastName, this.dateOfBirth,
        this.secQuestions.selectedQuestion1.Id, this.secQuestions.selectedQuestion2.Id, this.secQuestions.selectedQuestion3.Id,
        this.secQuestions.qstAnswer1, this.secQuestions.qstAnswer2, this.secQuestions.qstAnswer3);
  }

  public login() {
    console.log('login clicked');
    //const registrationId = 1;

    if (this.isExistingApplicant) {
      // validate
      this.appService.
        validateApplicantCredential(+this.appService.currentApplication.Id, this.applicationNumber,
          this.firstName, this.middleName, this.lastName, this.dateOfBirth,
          this.secQuestions.selectedQuestion1.Id, this.secQuestions.selectedQuestion2.Id, this.secQuestions.selectedQuestion3.Id,
          this.secQuestions.qstAnswer1, this.secQuestions.qstAnswer2, this.secQuestions.qstAnswer3)
        .subscribe(data => {
          if (Array.isArray(data) && data.length > 0) {
            console.log('existing application');
            this.router.navigateByUrl('/registration');
          } else {
            this.messageService.add({ severity: 'error', summary: 'Invalid Credentials' });
          }
        });
    } else {
      // save
      this.appService.
        insertApplicantBasic(+this.appService.currentApplication.Id,
          this.firstName, this.middleName, this.lastName, this.dateOfBirth,
          this.secQuestions.selectedQuestion1.Id, this.secQuestions.selectedQuestion2.Id, this.secQuestions.selectedQuestion3.Id,
          this.secQuestions.qstAnswer1, this.secQuestions.qstAnswer2, this.secQuestions.qstAnswer3)
        .subscribe(data => {
          if (data) {
            console.log('Inserted sucessfully');
            this.router.navigateByUrl('/registration');
          } else {
            console.error('Failed to insert the applicant record');
          }
        });
    }

  }

  public viewResult() {
    this.router.navigateByUrl('/rank-list');
  }

  public viewApplication() {
    this.isShowViewResult = false;
    this.isShowSecQuestion = true;
  }
}
