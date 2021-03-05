import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeaveComponent } from './leave/leave.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { AllTimeSheetComponent } from './timesheet/all-time-sheet/all-time-sheet.component';
import { PastDueComponent } from './timesheet/past-due/past-due.component';
import { RejectTimeSheetComponent } from './timesheet/reject-time-sheet/reject-time-sheet.component';
import { ProjectTimeComponent } from './timesheet/project-time/project-time.component';
import { TimeSummaryComponent } from './timesheet/time-summary/time-summary.component';
import { ReviewComponent } from './performence/review/review.component';
import { GoalComponent } from './performence/goal/goal.component';
import { CompentenciesCoreValueComponent } from './performence/compentencies-core-value/compentencies-core-value.component';
import { ContinuousFeedbackComponent } from './performence/continuous-feedback/continuous-feedback.component';
import { OneToOneMeetingComponent } from './performence/one-to-one-meeting/one-to-one-meeting.component';
import { TravelExpenseComponent } from './travel-expense/travel-expense.component';
import { SharedModule } from 'src/app/shared';
import { MeRoutingModule } from './me-routing.modute';



@NgModule({
  declarations: [LeaveComponent, AttendanceComponent, AllTimeSheetComponent, PastDueComponent, RejectTimeSheetComponent, ProjectTimeComponent, TimeSummaryComponent, ReviewComponent, GoalComponent, CompentenciesCoreValueComponent, ContinuousFeedbackComponent, OneToOneMeetingComponent, TravelExpenseComponent],
  imports: [
    SharedModule,
    MeRoutingModule
  ]
})
export class MeModule { }
