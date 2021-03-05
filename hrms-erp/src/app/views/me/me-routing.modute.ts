import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttendanceComponent } from './attendance/attendance.component';
import { LeaveComponent } from './leave/leave.component';
import { CompentenciesCoreValueComponent } from './performence/compentencies-core-value/compentencies-core-value.component';
import { ContinuousFeedbackComponent } from './performence/continuous-feedback/continuous-feedback.component';
import { GoalComponent } from './performence/goal/goal.component';
import { OneToOneMeetingComponent } from './performence/one-to-one-meeting/one-to-one-meeting.component';
import { ReviewComponent } from './performence/review/review.component';
import { AllTimeSheetComponent } from './timesheet/all-time-sheet/all-time-sheet.component';
import { PastDueComponent } from './timesheet/past-due/past-due.component';
import { ProjectTimeComponent } from './timesheet/project-time/project-time.component';
import { RejectTimeSheetComponent } from './timesheet/reject-time-sheet/reject-time-sheet.component';
import { TimeSummaryComponent } from './timesheet/time-summary/time-summary.component';
import { TravelExpenseComponent } from './travel-expense/travel-expense.component';

const routes: Routes = [ 
        { path: 'leave', component: LeaveComponent},
        { path: 'timesheet', component: AllTimeSheetComponent},
        { path: 'attendance', component: AttendanceComponent},
        { path: 'pastdue', component: PastDueComponent},
        { path: 'rejecttimesheet', component: RejectTimeSheetComponent},
        { path: 'projecttime', component: ProjectTimeComponent},
        { path: 'timesummary', component: TimeSummaryComponent},
        { path: 'travalexpense', component: TravelExpenseComponent},
        { path: 'meeting', component: OneToOneMeetingComponent},
        { path: 'continuous-feedback', component: ContinuousFeedbackComponent},
        { path: 'compentencies', component: CompentenciesCoreValueComponent},
        { path: 'review', component: ReviewComponent},
        { path: 'goal', component: GoalComponent}

           
  ];
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class MeRoutingModule {}
