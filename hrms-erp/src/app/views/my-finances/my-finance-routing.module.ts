import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentClaimComponent } from './mypay/component-claim/component-claim.component';
import { IncomeTaxComponent } from './mypay/income-tax/income-tax.component';
import { MySalaryComponent } from './mypay/my-salary/my-salary.component';
import { PaySlipComponent } from './mypay/pay-slip/pay-slip.component';
import { SummaryComponent } from './summary/summary.component';

const routes: Routes = [ 
    { path: 'summary', component: SummaryComponent, data: { title: 'Checkbox' } },
    { path: 'mysalary', component: MySalaryComponent, data: { title: 'Checkbox' } },
    { path: 'payslip', component: PaySlipComponent, data: { title: 'Checkbox' } },
    { path: 'income-tax', component: IncomeTaxComponent, data: { title: 'Checkbox' } },
    { path: 'component-claim', component: ComponentClaimComponent, data: { title: 'Checkbox' } }

    
  ];
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class MyFinanaceRoutingModule {}
