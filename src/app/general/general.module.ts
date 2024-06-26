import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeneralRoutingModule } from './general-routing.module';
import {NavHomeComponent} from "./nav-home/nav-home.component";


@NgModule({
  declarations: [
    NavHomeComponent
  ],
  imports: [
    CommonModule,
    GeneralRoutingModule
  ],
  exports:[
    NavHomeComponent
  ]
})
export class GeneralModule { }
