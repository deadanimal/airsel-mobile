import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MultipleRetaggingPageRoutingModule } from './multiple-retagging-routing.module';

import { MultipleRetaggingPage } from './multiple-retagging.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MultipleRetaggingPageRoutingModule
  ],
  declarations: [MultipleRetaggingPage]
})
export class MultipleRetaggingPageModule {}
