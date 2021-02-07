import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '../material.module';


const THIRD_MODULES = [
  MaterialModule
];
 const COMPONENTS: never[] = [];
const COMPONENTS_DYNAMIC: never[] = [];
const DIRECTIVES: never[] = [];
const PIPES: never[] = []; 
@NgModule({
  declarations: [],
  imports: [CommonModule, FormsModule, RouterModule, ReactiveFormsModule, ...THIRD_MODULES],
  exports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    ...THIRD_MODULES,
    ...COMPONENTS,
    ...DIRECTIVES,
    ...PIPES,
  ],
  entryComponents: COMPONENTS_DYNAMIC,
})
export class SharedModule {}
