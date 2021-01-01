import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { AttendanceComponent } from './attendance/attendance.component';
import { LeaveComponent } from './leave/leave.component';
import { MeRoutingModules } from './me-routing.module';
import { AllTimesheetComponent } from './timesheet/all-timesheet/all-timesheet.component';
import { PastDueComponent } from './timesheet/past-due/past-due.component';
import { RejectedTimesheetComponent } from './timesheet/rejected-timesheet/rejected-timesheet.component';
import { ProjectTimeComponent } from './timesheet/project-time/project-time.component';
import { TimeSummaryComponent } from './timesheet/time-summary/time-summary.component';
import { ReviewComponent } from './performance/review/review.component';
import { GoalComponent } from './performance/goal/goal.component';
import { CompentenciesAndCoreValueComponent } from './performance/compentencies-and-core-value/compentencies-and-core-value.component';
import { ContinuousFeedbackComponent } from './performance/continuous-feedback/continuous-feedback.component';
import { OneToOneMeetingComponent } from './performance/one-to-one-meeting/one-to-one-meeting.component';
import { TravelExpenseComponent } from './travel-expense/travel-expense.component';

const COMPONENTS = [
    LeaveComponent, AttendanceComponent, AllTimesheetComponent, PastDueComponent,
    RejectedTimesheetComponent, ProjectTimeComponent, TimeSummaryComponent, ReviewComponent, 
    GoalComponent, CompentenciesAndCoreValueComponent, ContinuousFeedbackComponent, 
    OneToOneMeetingComponent, TravelExpenseComponent];
@NgModule({
    imports:[SharedModule, MeRoutingModules ],
    declarations:[COMPONENTS]
})
export class MeModules{
}