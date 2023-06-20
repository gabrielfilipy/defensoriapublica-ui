import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewHomeComponent } from './view-home/view-home.component';

@NgModule({
  declarations: [
    ViewHomeComponent
  ],
  imports: [
    CommonModule
  ], 
  exports: [ViewHomeComponent]
})
export class HomeModule { }
