import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { ComponentClaimComponent } from '../my-finances/component-claim/component-claim.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { LeaveComponent } from './leave/leave.component';
import { CompentenciesAndCoreValueComponent } from './performance/compentencies-and-core-value/compentencies-and-core-value.component';
import { ContinuousFeedbackComponent } from './performance/continuous-feedback/continuous-feedback.component';
import { GoalComponent } from './performance/goal/goal.component';
import { OneToOneMeetingComponent } from './performance/one-to-one-meeting/one-to-one-meeting.component';
import { ReviewComponent } from './performance/review/review.component';
import { AllTimesheetComponent } from './timesheet/all-timesheet/all-timesheet.component';
import { PastDueComponent } from './timesheet/past-due/past-due.component';
import { ProjectTimeComponent } from './timesheet/project-time/project-time.component';
import { RejectedTimesheetComponent } from './timesheet/rejected-timesheet/rejected-timesheet.component';
import { TimeSummaryComponent } from './timesheet/time-summary/time-summary.component';
import { TravelExpenseComponent } from './travel-expense/travel-expense.component';
const route : Routes=[{
    path:'',
    children:[
        {path:'leave', component:LeaveComponent , data: { title: 'Leave' }},
        {path:'attendance', component:AttendanceComponent , data: { title: 'Attendance' }},
        {path:'travalexpense', component:TravelExpenseComponent , data: { title: 'Travel & Expense' }},
        {path:'timesheet', component:AllTimesheetComponent , data: { title: 'All Timesheet' }},
        {path:'pastdue', component:PastDueComponent , data: { title: 'Past Due' }},
        {path:'rejecttimesheet', component:RejectedTimesheetComponent , data: { title: 'Reject Time Sheet' }},
        {path:'projecttime', component:ProjectTimeComponent , data: { title: 'Project Time' }},
        {path:'timesummary', component:TimeSummaryComponent , data: { title: 'Time Summary' }},
        {path:'review', component:ReviewComponent , data: { title: 'Review' }},
        {path:'goal', component:GoalComponent , data: { title: 'Past Due' }},
        {path:'compentencies', component:CompentenciesAndCoreValueComponent , data: { title: 'Compentencies' }},
        {path:'continuous-feedback', component:ContinuousFeedbackComponent , data: { title: 'Past Due' }},
        {path:'meeting', component:OneToOneMeetingComponent , data: { title: 'Past Due' }},
    ] 
}]
@NgModule({
    imports:[RouterModule.forChild(route)],
    exports:[RouterModule]
})
export class MeRoutingModules{}

