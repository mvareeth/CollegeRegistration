import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public collegeName: string;
  public heading: string;
  title = 'Capstone';
  constructor() {
    this.collegeName = 'U.C. College';
    this.heading = 'Welcome to ' + this.collegeName;
  }
}
