import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentClaimComponent } from './component-claim/component-claim.component';
import { IncomeTaxComponent } from './income-tax/income-tax.component';
import { MySalaryComponent } from './my-salary/my-salary.component';
import { PaySlipComponent } from './pay-slip/pay-slip.component';
import { SummaryComponent } from './summary/summary.component';

const routes: Routes = [
    {
        path: '',
        children: [
            { path: 'summary', component: SummaryComponent, data: { title: 'Summary' } },
            { path: 'mysalary', component: MySalaryComponent, data: { title: 'My Salary' } },
            { path: 'payslip', component: PaySlipComponent, data: { title: 'Pay Slip' } },
            { path: 'income-tax', component: IncomeTaxComponent, data: { title: 'Income Tax' } },
            { path: 'component-claim', component: ComponentClaimComponent, data: { title: 'Component Claim' } },
        ],
    },
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class MyFinancesRoutingModule { }