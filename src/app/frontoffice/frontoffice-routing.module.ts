import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomComponent } from './hom/hom.component';

const routes: Routes = [
  {
    path: '',
    component: HomComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontofficeRoutingModule { }
