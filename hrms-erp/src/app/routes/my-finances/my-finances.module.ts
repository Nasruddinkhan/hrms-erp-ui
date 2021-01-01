import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { MyFinancesRoutingModule } from './my-finances-routing.module';
import { SummaryComponent } from './summary/summary.component';
import { MySalaryComponent } from './my-salary/my-salary.component';
import { PaySlipComponent } from './pay-slip/pay-slip.component';
import { IncomeTaxComponent } from './income-tax/income-tax.component';
import { ComponentClaimComponent } from './component-claim/component-claim.component';

const COMPONENTS = [SummaryComponent, MySalaryComponent, PaySlipComponent, IncomeTaxComponent, ComponentClaimComponent];
const COMPONENTS_DYNAMIC = [];


@NgModule({
    imports: [SharedModule, MyFinancesRoutingModule],
    declarations: [COMPONENTS, COMPONENTS_DYNAMIC],
    entryComponents: COMPONENTS_DYNAMIC,
})
export class MyFinancesModule { }