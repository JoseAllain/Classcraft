import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import {GeneralModule} from "../general/general.module";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PublicRoutingModule,
    GeneralModule
  ]
})
export class PublicModule { }
