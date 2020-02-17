import { Component, OnInit } from '@angular/core';

import { AppService } from '../services/app.service';
import { SecurityQuestion } from '../model/security-question.model';

@Component({
  selector: 'app-security-question',
  templateUrl: './security-question.component.html',
  styleUrls: ['./security-question.component.css']
})
export class SecurityQuestionComponent implements OnInit {

  public questionList: SecurityQuestion[];
  public selectedQuestion1: SecurityQuestion;
  public selectedQuestion2: SecurityQuestion;
  public selectedQuestion3: SecurityQuestion;

  public qstAnswer1: string;
  public qstAnswer2: string;
  public qstAnswer3: string;

  public isExistingApplicant = false;

  constructor(private appService: AppService) {
    this.getSecurityQuestions();
  }

  ngOnInit() {

  }

  private getSecurityQuestions() {
    this.appService.getSecurityQuestion()
      .subscribe((data: any) => {
        this.questionList = data;
        this.getApplicantSecurityQuestion();
      });
  }
  private getApplicantSecurityQuestion() {
    if (this.appService.currentApplication && this.appService.currentApplication.SecurityQuestionId1) {
      this.isExistingApplicant = true;
      this.selectedQuestion1 = this.questionList.
        filter(os => os.Id === this.appService.currentApplication.SecurityQuestionId1)[0];
      this.selectedQuestion2 = this.questionList.
        filter(os => os.Id === this.appService.currentApplication.SecurityQuestionId2)[0];
      this.selectedQuestion3 = this.questionList.
        filter(os => os.Id === this.appService.currentApplication.SecurityQuestionId3)[0];
    }
  }
}
