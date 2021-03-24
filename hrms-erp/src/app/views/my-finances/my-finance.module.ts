import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SummaryComponent } from './summary/summary.component';
import { MyFinanaceRoutingModule } from './my-finance-routing.module';
import { MySalaryComponent } from './mypay/my-salary/my-salary.component';
import { PaySlipComponent } from './mypay/pay-slip/pay-slip.component';
import { IncomeTaxComponent } from './mypay/income-tax/income-tax.component';
import { ComponentClaimComponent } from './mypay/component-claim/component-claim.component';



@NgModule({
  declarations: [SummaryComponent, MySalaryComponent, PaySlipComponent, IncomeTaxComponent, ComponentClaimComponent],
  imports: [
    CommonModule,
    MyFinanaceRoutingModule
  ]
})
export class MyFinanceModule { }
