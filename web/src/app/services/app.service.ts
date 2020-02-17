import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


// import 'rxjs/add/operator/map';
// import 'rxjs/Rx';
import { Observable, of } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';

import { UtilService } from './util.service';
import { Registration } from '../model/registration.model';
import { CoursePreference } from '../model/course-preference.model';
import { Application } from '../model/application.model';
import { StaffBasicProfile } from '../model/staff-basic-profile.model';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  public selectedCollegeId = 1;
  public currentApplication: Application;
  public loggedInStaff: StaffBasicProfile;
  public canEditCurrentApplication = false;

  constructor(private http: HttpClient, private utilService: UtilService) { }

  public get StaffWelcomeMessage(): string {
    if (this.loggedInStaff) {
      return 'Welcome ' + this.loggedInStaff.FirstName + ' ' + this.loggedInStaff.LastName;
    } else {
      return '';
    }
  }

  public isNotEmptyApplicationParameters(applicationNumber: string,
    firstName: string, middleName: string, lastName: string, dateofBirth: Date): boolean {
    if (
      this.utilService.isNullOrUndefined(applicationNumber) ||
      this.utilService.isNullOrUndefined(firstName) ||
      this.utilService.isNullOrUndefined(lastName) ||
      !this.utilService.isEligibleDateofBirth(dateofBirth)
    ) {
      return false;
    }
    return true;
  }

  public validateApplicationParameters(applicationNumber: string,
    firstName: string, middleName: string, lastName: string, dateofBirth: Date): any {
    this.currentApplication = undefined;
    if (!this.isNotEmptyApplicationParameters(applicationNumber, firstName, middleName, lastName, dateofBirth)) {
      return of(false);
    }
    return this.isValidApplication(this.selectedCollegeId,
      applicationNumber, firstName, middleName, lastName, dateofBirth);
  }

  private isValidApplication(collegeId: number, applicationNumber: string,
    firstName: string, middleName: string, lastName: string, dateofBirth: Date): any {
    const jsonKey = 'validateApplication';
    //const dateString = dateofBirth.getFullYear() + '-' + (dateofBirth.getMonth() + 1) + '-' + dateofBirth.getDate();
    const dateString = this.utilService.getDateString(dateofBirth);
    console.log(dateString);

    const applicationObject = {
      collegeId: collegeId,
      applicationNumber: this.utilService.getString(applicationNumber),
      firstName: this.utilService.getString(firstName),
      middleName: this.utilService.getString(middleName),
      lastName: this.utilService.getString(lastName), dateofBirth: dateString
    };
    console.log(applicationObject);


    // let httpHeaders = new HttpHeaders({
    //   'Content-Type': 'application/x-www-form-urlencoded',
    //   'Cache-Control': 'no-cache'
    // });
    // let options = {
    //   headers: httpHeaders
    // };

    return this.http.post('/api/v1/registration/validateApplication', applicationObject) //, options)
      .pipe(map(data => {
        return data[jsonKey];
      }));
  }

  public isNotEmptyApplicantCredential(applicationNumber: string, firstName: string,
    middleName: string, lastName: string, dateofBirth: Date,
    securityQuestionId1: number, securityQuestionId2: number, securityQuestionId3: number,
    securityQstAnswer1: string, securityQstAnswer2: string, securityQstAnswer3: string
  ): boolean {
    if (!this.isNotEmptyApplicationParameters(applicationNumber, firstName, middleName, lastName, dateofBirth) ||
      securityQuestionId1 <= 0 || securityQuestionId2 <= 0 || securityQuestionId3 <= 0 ||
      this.utilService.isNullOrUndefined(securityQstAnswer1) ||
      this.utilService.isNullOrUndefined(securityQstAnswer2) ||
      this.utilService.isNullOrUndefined(securityQstAnswer3)
    ) {
      return false;
    }
    return true;
  }

  public validateApplicantCredential(applicationId: number,
    applicationNumber: string,
    firstName: string, middleName: string, lastName: string, dateofBirth: Date,
    securityQuestionId1: number, securityQuestionId2: number, securityQuestionId3: number,
    securityQstAnswer1: string, securityQstAnswer2: string, securityQstAnswer3: string): any {

    if (applicationId <= 0) {
      return of(false);
    }
    if (!this.isNotEmptyApplicantCredential(applicationNumber, firstName, middleName, lastName, dateofBirth,
      securityQuestionId1, securityQuestionId2, securityQuestionId3,
      securityQstAnswer1, securityQstAnswer2, securityQstAnswer3
    )) {
      return of(false);
    }
    return this.isValidApplicant(applicationId,
      securityQuestionId1, securityQuestionId2, securityQuestionId3,
      securityQstAnswer1, securityQstAnswer2, securityQstAnswer3);
  }

  private isValidApplicant(applicationId: number,
    securityQuestionId1: number, securityQuestionId2: number, securityQuestionId3: number,
    securityQstAnswer1: string, securityQstAnswer2: string, securityQstAnswer3: string): any {
    const jsonKey = 'validateApplicant';

    const applicantObject = {
      applicationId: applicationId,
      securityQuestionId1: securityQuestionId1,
      securityQuestionId2: securityQuestionId2,
      securityQuestionId3: securityQuestionId3,
      securityQstAnswer1: this.utilService.getString(securityQstAnswer1),
      securityQstAnswer2: this.utilService.getString(securityQstAnswer2),
      securityQstAnswer3: this.utilService.getString(securityQstAnswer3)
    };
    console.log(applicantObject);
    return this.http.post('/api/v1/registration/validateApplicant', applicantObject)
      .pipe(map(data => {
        return data[jsonKey];
      }));
  }

  public insertApplicantBasic(applicationId: number,
    firstName: string, middleName: string, lastName: string, dateofBirth: Date,
    securityQuestionId1: number, securityQuestionId2: number, securityQuestionId3: number,
    securityQstAnswer1: string, securityQstAnswer2: string, securityQstAnswer3: string): any {
    const jsonKey = 'insertApplicantBasic';
    const applicantObject = {
      applicationId: applicationId,
      firstName: this.utilService.getString(firstName),
      middleName: this.utilService.getString(middleName),
      lastName: this.utilService.getString(lastName),
      dateofBirth: this.utilService.getDateString(dateofBirth),
      securityQuestionId1: securityQuestionId1,
      securityQuestionId2: securityQuestionId2,
      securityQuestionId3: securityQuestionId3,
      securityQstAnswer1: this.utilService.getString(securityQstAnswer1),
      securityQstAnswer2: this.utilService.getString(securityQstAnswer2),
      securityQstAnswer3: this.utilService.getString(securityQstAnswer3)
    };
    console.log(applicantObject);
    return this.http.post('/api/v1/registration/insertApplicantBasic', applicantObject)
      .pipe(map(data => {
        return data[jsonKey];
      }));
  }

  public getRegistration(applicantId: number) {
    const jsonKey = 'registrationInfo';
    return this.http.get('/api/v1/registration/registrationInfo/' + applicantId)
      .pipe(map(data => {
        return data[jsonKey];
      }));
  }

  public saveAddress(addressId: number, address1: string, address2: string, cityId: number,
    stateId: number, countryId: number, pobox: string) {
    const saveAddressObject = {
      addressId: addressId,
      address1: this.utilService.getString(address1),
      address2: this.utilService.getString(address2),
      cityId: cityId,
      stateId: stateId,
      countryId: countryId,
      pobox: this.utilService.getString(pobox),
    };
    console.log(saveAddressObject);
    const jsonKey = 'saveAddress';
    if (this.utilService.isNullOrUndefined(addressId)) {
      // insert address
      return this.http.post('/api/v1/registration/insertAddress', saveAddressObject)
        .pipe(map(data => {
          return data[jsonKey];
        }));
    } else {
      // update address
      return this.http.post('/api/v1/registration/updateAddress', saveAddressObject)
        .pipe(map(data => {
          return data[jsonKey];
        }));
    }
  }

  public deleteApplicantCoursePreference(aplicantId: number) {
    const deleteApplicantCoursePreferenceObject = {
      applicantId: aplicantId
    };

    console.log(deleteApplicantCoursePreferenceObject);
    const jsonKey = 'deleteApplicantCoursePreference';

    // delete Applicant Course Preference
    return this.http.post('/api/v1/registration/deleteApplicantCoursePreference', deleteApplicantCoursePreferenceObject)
      .pipe(map(data => {
        return data[jsonKey];
      }));

  }

  public saveCoursePreference(couserPreferences: CoursePreference[]) {
    const saveCoursePreferenceObjects = [];
    for (const couserPreference of couserPreferences) {
      const saveCoursePreferenceObject = {
        applicantId: couserPreference.ApplicantId,
        preferenceRank: couserPreference.PreferenceRank,
        courseId: couserPreference.CourseId,
        coursePreferenceId: couserPreference.CoursePreferenceId
      };
      saveCoursePreferenceObjects.push(saveCoursePreferenceObject);
    }
    console.log(saveCoursePreferenceObjects);
    const jsonKey = 'saveCoursePreference';

    // insert / update course preferences
    return this.http.post('/api/v1/registration/saveCoursePreference', saveCoursePreferenceObjects)
      .pipe(map(data => {
        return data[jsonKey];
      }));

  }

  public saveRegistration(registration: Registration) {
    const saveRegistrationObject = {
      applicantId: registration.Id,
      firstName: this.utilService.getString(registration.FirstName),
      middleName: this.utilService.getString(registration.MiddleName),
      lastName: this.utilService.getString(registration.LastName),
      dateofBirth: this.utilService.getDateString(registration.DateofBirth),
      addressId: registration.AddressId,
      address1: this.utilService.getString(registration.Address1),
      address2: this.utilService.getString(registration.Address2),
      cityId: registration.CityId,
      stateId: registration.StateId,
      countryId: registration.CountryId,
      pobox: this.utilService.getString(registration.POBOX),
      previousCollegeAddress: this.utilService.getString(registration.PreviousCollegeAddress),
      previousCourseId: registration.PreviousCourseId,
      previousCourseTotalMark: registration.PreviousCourseTotalMark,
      previousCourseTotalMarkPercentage: registration.PreviousCourseTotalMarkPercentage,
      applicantReservationId: registration.ApplicantReservationId,
      quotaId: registration.QuotaId
    };
    console.log(saveRegistrationObject);
    const jsonKey = 'updateRegistration';

    // update address
    return this.http.post('/api/v1/registration/updateRegistration', saveRegistrationObject)
      .pipe(map(data => {
        return data[jsonKey];
      }));

  }

  public setRegistrationCompletion(aaplicantId: number) {
    const setRegistrationCompletionObject = {
      applicantId: aaplicantId
    };

    console.log(setRegistrationCompletionObject);
    const jsonKey = 'setRegistrationCompletion';

    // delete Applicant Course Preference
    return this.http.post('/api/v1/registration/setRegistrationCompletion', setRegistrationCompletionObject)
      .pipe(map(data => {
        return data[jsonKey];
      }));

  }

  public staffLogin(userName: string, password: string) {
    const loginObject = {
      userName: this.utilService.getString(userName),
      password: this.utilService.getString(password)
    };
    console.log(loginObject);
    const jsonKey = 'staffLogin';

    // staff Login
    return this.http.post('/api/v1/registration/staffLogin', loginObject)
      .pipe(map(data => {
        return data[jsonKey];
      }));
  }

  public getMarksByApplicant(applicantId: number): any {
    const jsonKey = 'marksByApplicant';
    return this.http.get('/api/v1/registration/marksByApplicant/' + applicantId)
      .pipe(map(data => {
        return data[jsonKey];
      }));
  }

  public getCoursesByApplicant(applicantId: number): any {
    const jsonKey = 'coursesByApplicant';
    return this.http.get('/api/v1/registration/coursesByApplicant/' + applicantId)
      .pipe(map(data => {
        return data[jsonKey];
      }));
  }

  public getApplicantlistByCollege(collegeId: number, academicYearId: number): any {
    const jsonKey = 'applicantlistByCollege';
    return this.http.get('/api/v1/registration/applicantlistByCollege/' + collegeId + '/' + academicYearId)
      .pipe(map(data => {
        return data[jsonKey];
      }));
  }

  public getRanklistByApplicant(applicantId: number): any {
    const jsonKey = 'ranklistByApplicant';
    return this.http.get('/api/v1/registration/ranklistByApplicant/' + applicantId)
      .pipe(map(data => {
        return data[jsonKey];
      }));
  }

  public getRanklistByCollege(collegeId: number, academicYearId: number): any {
    const jsonKey = 'ranklistByCollege';
    return this.http.get('/api/v1/registration/collegeRanklist/' + collegeId + '/' + academicYearId)
      .pipe(map(data => {
        return data[jsonKey];
      }));
  }

  public processRankList(academicYearId: number) {
    const jsonKey = 'processRankList';
    const processRankListObject = {
      academicYearId: academicYearId
    };
    console.log(processRankListObject);

    return this.http.post('/api/v1/registration/processRankList', processRankListObject)
      .pipe(map(data => {
        return data[jsonKey];
      }));
  }


  public getAcademicYearsByCollege(collegeId: number): any {
    const jsonKey = 'academicYearList';
    return this.http.get('/api/v1/registration/academicYears/' + collegeId)
      .pipe(map(data => {
        return data[jsonKey];
      }));
  }

  public getCoursesByCollege(collegeId: number): any {
    const jsonKey = 'coursesByCollege';
    return this.http.get('/api/v1/registration/coursesByCollege/' + collegeId)
      .pipe(map(data => {
        return data[jsonKey];
      }));
  }

  // This will be populated in previouse couse dropdown
  public getCourses(): any {
    const jsonKey = 'courses';
    return this.http.get('/api/v1/registration/courses')
      .pipe(map(data => {
        return data[jsonKey];
      }));
  }

  public getSecurityQuestion(): any {
    const jsonKey = 'securityQuestions';
    return this.http.get('/api/v1/registration/securityQuestions')
      .pipe(map(data => {
        return data[jsonKey];
      }));
  }

  public getReservationQuotas(): any {
    const jsonKey = 'reservationQuotas';
    return this.http.get('/api/v1/registration/reservationQuotas')
      .pipe(map(data => {
        return data[jsonKey];
      }));
  }

  public getCity(): any {
    const jsonKey = 'city';
    return this.http.get('/api/v1/registration/city')
      .pipe(map(data => {
        return data[jsonKey];
      }));
  }

  public getState(): any {
    const jsonKey = 'state';
    return this.http.get('/api/v1/registration/state')
      .pipe(map(data => {
        return data[jsonKey];
      }));
  }

  public getCountry(): any {
    const jsonKey = 'country';
    return this.http.get('/api/v1/registration/country')
      .pipe(map(data => {
        return data[jsonKey];
      }));
  }

}
