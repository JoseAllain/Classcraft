import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RegistroRoutingModule } from './registro-routing.module';
import {RouterModule} from "@angular/router";
import {GeneralModule} from "../general/general.module";
import {HttpClientModule} from "@angular/common/http";




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RegistroRoutingModule,
    RouterModule,
    GeneralModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class RegistroModule { }
