import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontofficeRoutingModule } from './frontoffice-routing.module';
import { HomComponent } from './hom/hom.component';


@NgModule({
  declarations: [
    HomComponent
  ],
  imports: [
    CommonModule,
    FrontofficeRoutingModule
  ]
})
export class FrontofficeModule { }
