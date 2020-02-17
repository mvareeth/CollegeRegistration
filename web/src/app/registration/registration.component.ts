import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { Location } from '@angular/common';
// import { switchMap } from 'rxjs/operators';

// import  'ag-grid-angular';
import * as moment from 'moment';
import { AppService } from '../services/app.service';
import { Registration } from '../model/registration.model';
import { UtilService } from '../services/util.service';
import { CoursePreference } from '../model/course-preference.model';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { City } from '../model/city.model';
import { State } from '../model/state.model';
import { Country } from '../model/country.model';
import { Course } from '../model/course.model';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  private gridColumnApi;

  public preferenceColumnDefs = [];
  // public preferenceRowData = [];
  public preferenceGridApi: any;
  public preferenceGridOptions: any;


  public components;

  public editType;

  public applicantId: number;
  // public applicationNumber: string;
  // public firstName: string;
  // public middleName: string;
  // public lastName: string;
  // public dateOfBirth: Date;

  // public address1: string;
  // public address2: string;
  // public zipcode: string;
  public selectedCity: any;
  public selectedState: any;
  public selectedCountry: any;

  public cityList: City[];
  public stateList: State[];
  public countryList: Country[];

  public courseListByCollege: Course[];
  public courseList: Course[];
  public selectedPreviouseCourse: Course;
  // public previousTotalMarks: number;
  // public previousPercentage: number;

  public coursesByApplicant: any; // retrieved list for grid
  public marksByApplicant: any; // retrieved list for grid

  public reservationQuota: any;
  public reservationQuotaList: any;

  public registrationInfo: Registration;
  private couserPreferences: CoursePreference[];

  public canEdit: boolean;
  public lastDateOfApplication: string;
  public maxDate: Date;

  public constructor(private router: Router, private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private appService: AppService, private utilService: UtilService) {
    this.canEdit = this.appService.canEditCurrentApplication;
    this.maxDate = this.utilService.minimumDateofBirth;
    this.registrationInfo = new Registration();
  }

  public ngOnInit() {
    if (this.appService.currentApplication === undefined) {
      this.router.navigateByUrl('admission');
    }
    if (this.appService.currentApplication) {
      this.applicantId = this.appService.currentApplication.Id;
      this.coursesByApplicant = [];

      this.getCity();
      this.getState();
      this.getCountry();

      this.getCourse();
      this.getCoursesByCollege();
      this.getReservationQuotas();

      this.getMarksByApplicant();

      this.coursePreferenceGrid();
      this.getRegistration(this.applicantId);

      this.lastDateOfApplication = moment(this.appService.currentApplication.LastDateofApplication).format('MM-DD-YYYY');
    }
  }

  public get enableSaveButton(): boolean {
    return this.appService.isNotEmptyApplicationParameters(this.registrationInfo.ApplicationNumber, this.registrationInfo.FirstName,
      this.registrationInfo.MiddleName, this.registrationInfo.LastName, this.registrationInfo.DateofBirth);
  }

  public get enableCompleteButton(): boolean {
    if (!this.enableSaveButton) {
      return false;
    }
    if (this.utilService.isNullOrUndefined(this.registrationInfo.Address1)) {
      return false;
    }
    if (!this.reservationQuota || !this.selectedPreviouseCourse) {
      return false;
    }
    if (this.utilService.isNullOrUndefined(this.registrationInfo.PreviousCourseTotalMark) ||
      this.registrationInfo.PreviousCourseTotalMark === 0) {
      return false;
    }
    if (this.utilService.isNullOrUndefined(this.registrationInfo.PreviousCourseTotalMarkPercentage) ||
      this.registrationInfo.PreviousCourseTotalMarkPercentage === 0) {
      return false;
    }
    if (this.coursesByApplicant && this.coursesByApplicant.length > 0 &&
      this.utilService.isNullOrUndefined(this.coursesByApplicant[0].Course)) {
      return false;
    }

    return true;
  }

  public complete() {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to complete the registration?',
      accept: () => {
        this.saveAndComplete(true);
      }
    });
  }

  public saveForLater() {
    this.saveAndComplete(false);
  }
  public saveAndComplete(setAsCompleted: boolean) {
    // save address
    if (this.selectedCity) {
      this.registrationInfo.CityId = this.selectedCity.Id;
    } else {
      this.registrationInfo.CityId = null;
    }
    if (this.selectedState) {
      this.registrationInfo.StateId = this.selectedState.Id;
    } else {
      this.registrationInfo.StateId = null;
    }
    if (this.selectedCountry) {
      this.registrationInfo.CountryId = this.selectedCountry.Id;
    } else {
      this.registrationInfo.CountryId = null;
    }
    if (this.selectedPreviouseCourse) {
      this.registrationInfo.PreviousCourseId = this.selectedPreviouseCourse.Id;
    } else {
      this.registrationInfo.PreviousCourseId = null;
    }
    if (this.reservationQuota) {
      this.registrationInfo.QuotaId = this.reservationQuota.Id;
    } else {
      this.registrationInfo.QuotaId = null;
    }

    // update course preference
    // if (this.couserPreferences === undefined) {
    this.couserPreferences = [];
    if (!this.utilService.isNullOrUndefined(this.coursesByApplicant[0].Course)) {
      const courseId = this.courseList.filter(os => os.Course === this.coursesByApplicant[0].Course)[0].Id;
      this.couserPreferences.push(new CoursePreference(this.registrationInfo.Id, courseId, this.coursesByApplicant[0].Id,
        this.utilService.getNumber(this.coursesByApplicant[0].CoursePreferenceId)));
    }
    if (!this.utilService.isNullOrUndefined(this.coursesByApplicant[1].Course)) {
      const courseId = this.courseList.filter(os => os.Course === this.coursesByApplicant[1].Course)[0].Id;
      this.couserPreferences.push(new CoursePreference(this.registrationInfo.Id, courseId, this.coursesByApplicant[1].Id,
        this.utilService.getNumber(this.coursesByApplicant[1].CoursePreferenceId)));
    }
    if (!this.utilService.isNullOrUndefined(this.coursesByApplicant[2].Course)) {
      const courseId = this.courseList.filter(os => os.Course === this.coursesByApplicant[2].Course)[0].Id;
      this.couserPreferences.push(new CoursePreference(this.registrationInfo.Id, courseId, this.coursesByApplicant[2].Id,
        this.utilService.getNumber(this.coursesByApplicant[2].CoursePreferenceId)));
    }
    // }
    this.appService.
      deleteApplicantCoursePreference(this.registrationInfo.Id)
      .subscribe(data => {
        if (data) {
          console.log('Deleted Course Preference Sucessfully');
          if (this.couserPreferences.length > 0) {
            this.appService.
              saveCoursePreference(this.couserPreferences)
              .subscribe(savedData => {
                if (savedData) {
                  console.log('Updated Course Preference Sucessfully');
                } else {
                  this.messageService.add({ severity: 'error', summary: 'Failed to save the course preference detail' });
                }
              });
          }
        } else {
          this.messageService.add({ severity: 'error', summary: 'Failed to save the course preference detail' });
        }
      });

    this.appService.
      saveAddress(this.registrationInfo.AddressId, this.registrationInfo.Address1, this.registrationInfo.Address2,
        this.registrationInfo.CityId, this.registrationInfo.StateId, this.registrationInfo.CountryId, this.registrationInfo.POBOX)
      .subscribe(data => {
        if (data) {

          if (!this.registrationInfo.AddressId && Array.isArray(data) && data.length > 0) {
            console.log('Address inserted sucessfully');
            this.registrationInfo.AddressId = data[0].Id;
          } else {
            console.log('Address updated sucessfully');
          }
          // update registration details
          this.appService.
            saveRegistration(this.registrationInfo)
            .subscribe(regData => {
              if (regData) {
                // update completion status
                if (setAsCompleted) {
                  this.appService.
                    setRegistrationCompletion(this.registrationInfo.Id)
                    .subscribe(completeData => {
                      if (completeData) {
                        this.messageService.add({ severity: 'success', summary: 'Registration completed sucessfully' });
                        this.canEdit = false;
                      } else {
                        this.messageService.add({ severity: 'error', summary: 'Failed to complete the registration' });
                      }
                    });
                } else {
                  this.messageService.add({ severity: 'success', summary: 'Registration updated sucessfully' });
                }
              } else {
                this.messageService.add({ severity: 'error', summary: 'Failed to save the registration detail' });
              }
            });
        } else {
          this.messageService.add({ severity: 'error', summary: 'Failed to save the address detail' });
        }
      });

  }

  public back() {
    this.router.navigateByUrl('admission');
  }

  private getRegistration(applicantId: number) {
    this.appService.getRegistration(applicantId)
      .subscribe((data: any) => {
        if (Array.isArray(data) && data.length > 0) {
          this.registrationInfo = data[0];
          this.selectedCity = this.cityList.filter(os => os.Id === this.registrationInfo.CityId)[0];
          this.selectedState = this.stateList.filter(os => os.Id === this.registrationInfo.StateId)[0];
          this.selectedCountry = this.countryList.filter(os => os.Id === this.registrationInfo.CountryId)[0];
          this.reservationQuota = this.reservationQuotaList.filter(os => os.Id === this.registrationInfo.QuotaId)[0];
          this.selectedPreviouseCourse = this.courseList.filter(os => os.Id === this.registrationInfo.PreviousCourseId)[0];
        }
        if (this.utilService.isNullOrUndefined(this.registrationInfo.FirstName)) {
          this.registrationInfo.FirstName = this.appService.currentApplication.FirstName;
          this.registrationInfo.MiddleName = this.appService.currentApplication.MiddleName;
          this.registrationInfo.LastName = this.appService.currentApplication.LastName;
          this.registrationInfo.DateofBirth = this.appService.currentApplication.DateOfBirth;
          this.registrationInfo.ApplicationNumber = this.appService.currentApplication.ApplicationNumber;
        }
        this.registrationInfo.DateofBirth = new Date(this.registrationInfo.DateofBirth);
        this.canEdit = this.appService.canEditCurrentApplication && !this.registrationInfo.IsRegistrationCompleted;
      });
  }


  private getCity() {
    this.appService.getCity()
      .subscribe((data: any) => {
        this.cityList = data;
      });
  }
  private getState() {
    this.appService.getState()
      .subscribe((data: any) => {
        this.stateList = data;
      });
  }
  private getCountry() {
    this.appService.getCountry()
      .subscribe((data: any) => {
        this.countryList = data;
      });
  }

  private getReservationQuotas() {
    this.appService.getReservationQuotas()
      .subscribe((data: any) => {
        this.reservationQuotaList = data;
      });
  }

  private getCourse() {
    this.appService.getCourses()
      .subscribe((data: any) => {
        this.courseList = data;
      });
  }
  // using in the dropdown inside the grid
  private getCoursesByCollege() {
    this.appService.getCoursesByCollege(this.appService.selectedCollegeId)
      .subscribe((data: any) => {
        this.courseListByCollege = data;
      });
  }

  private getCoursesByApplicant() {
    this.appService.getCoursesByApplicant(this.applicantId)
      .subscribe((data: any) => {
        if (data.length === 0) {
          this.coursesByApplicant = this.getPreferenceRowData();
        } else {
          this.coursesByApplicant = [];
          let preferenceRank = '';
          for (const couserPreference of data) {
            if (couserPreference.PreferenceRank === 1) { preferenceRank = 'First'; }
            if (couserPreference.PreferenceRank === 2) { preferenceRank = 'Second'; }
            if (couserPreference.PreferenceRank === 3) { preferenceRank = 'Third'; }
            this.coursesByApplicant.push({
              Course: couserPreference.Course, PreferenceRank: preferenceRank, Id: couserPreference.PreferenceRank,
              CoursePreferenceId: couserPreference.CoursePreferenceId
            });
          }
          if (this.coursesByApplicant.length === 1) {
            this.coursesByApplicant.push({
              Course: '',
              PreferenceRank: 'Second',
              Id: 2,
              CoursePreferenceId: ''
            });
          }
          if (this.coursesByApplicant.length === 2) {
            this.coursesByApplicant.push({
              Course: '',
              PreferenceRank: 'Third',
              Id: 3,
              CoursePreferenceId: ''
            });
          }
        }

      });
  }

  private getMarksByApplicant() {
    this.appService.getMarksByApplicant(this.applicantId)
      .subscribe((data: any) => {
        this.marksByApplicant = data;
      });
  }

  private coursePreferenceGrid() {
    // https://www.ag-grid.com/javascript-grid-cell-editing/
    // https://www.ag-grid.com/javascript-grid-server-side-model-crud/
    this.preferenceColumnDefs = [
      {
        headerName: 'Preference Order',
        field: 'PreferenceRank',
        editable: false,
        cellEditor: 'agSelectCellEditor',
        cellEditorParams: {
          values: ['First', 'Second', 'Third']
        },
        singleClickEdit: true,
        width: 100
      },
      {
        headerName: 'Course',
        field: 'Course',
        editable: this.canEdit,
        cellEditor: 'agSelectCellEditor',
        cellEditorParams: {
          values: ['B.Sc Chemistry', 'B.Sc Mathematics',
            'B.Sc Physics', 'M.Sc Chemistry', 'M.Sc.Mathematics', 'M.Sc Physics', 'Ph.D Mathematics', 'Ph.D Physics']
        },
        // cellEditorParams: {
        //   values: this.courseList
        // }
        singleClickEdit: true
      },
      {
        headerName: 'CourseId',
        field: 'Id',
        editable: false,
        hide: true
      },

    ];

    if (this.applicantId > 0) {
      this.getCoursesByApplicant();
    } else {
      this.coursesByApplicant = this.getPreferenceRowData();
    }
    this.editType = 'fullRow';
  }

  private getPreferenceRowData() {
    const rowData = [];

    rowData.push({
      Course: '',
      PreferenceRank: 'First',
      Id: 1,
      CoursePreferenceId: ''
    });
    rowData.push({
      Course: '',
      PreferenceRank: 'Second',
      Id: 2,
      CoursePreferenceId: ''
    });
    rowData.push({
      Course: '',
      PreferenceRank: 'Third',
      Id: 3,
      CoursePreferenceId: ''
    });

    return rowData;
  }

  public onBtStopEditing() {
    this.preferenceGridApi.stopEditing();
  }

  public onBtStartEditing() {
    this.preferenceGridApi.setFocusedCell(2, 'make');
    this.preferenceGridApi.startEditingCell({
      rowIndex: 2,
      colKey: 'make'
    });
  }

  public onGridReady(params) {
    this.preferenceGridApi = params.api;
    this.gridColumnApi = params.columnApi;

    params.api.sizeColumnsToFit();
  }
}
