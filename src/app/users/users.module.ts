import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { ButtonModule } from 'primeng/button';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CardModule } from 'primeng/card';
import { PaginatorModule } from 'primeng/paginator';
import { ViewComponent } from './view/view.component';
import { InsumoService } from './service/insumo.service';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    ListComponent,
    ViewComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    RadioButtonModule,
    CardModule,
    PaginatorModule,
    RouterModule 
  ],
  providers: [InsumoService],
  exports: [ListComponent, ViewComponent]
})
export class UsersModule { }
