import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MultipleRetaggingPage } from './multiple-retagging.page';

const routes: Routes = [
  {
    path: '',
    component: MultipleRetaggingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MultipleRetaggingPageRoutingModule {}
