import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApplicantLoginComponent } from './applicant-login/applicant-login.component';
import { RegistrationComponent } from './registration/registration.component';
import { StaffLoginComponent } from './staff-login/staff-login.component';
import { PublishRankListComponent } from './publish-rank-list/publish-rank-list.component';
import { RankListComponent } from './rank-list/rank-list.component';
import { ApplicantListComponent } from './applicant-list/applicant-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './router-guard/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'admission', pathMatch: 'full' },
  { path: 'admission', component: ApplicantLoginComponent },
  { path: 'registration', component: RegistrationComponent, canActivate: [AuthGuard] },
  { path: 'staff', component: StaffLoginComponent },
  { path: 'publish-rank-list', component: PublishRankListComponent, canActivate: [AuthGuard] },
  { path: 'rank-list', component: RankListComponent, canActivate: [AuthGuard] },
  { path: 'applicant-list', component: ApplicantListComponent, canActivate: [AuthGuard] },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
