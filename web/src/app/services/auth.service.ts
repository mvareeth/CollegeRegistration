import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';
import { AppService } from './app.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  constructor(private appService: AppService) {

  }

  public get isLoggedIn() {
    if (this.appService.currentApplication || this.appService.loggedInStaff) {
      return true;
    } else {
      return false;
    }
  }

  logout(): void {
    this.appService.currentApplication = this.appService.loggedInStaff = undefined;
  }
}
