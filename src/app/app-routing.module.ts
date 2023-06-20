import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewComponent } from './users/view/view.component';
import { ListComponent } from './users/list/list.component';
import { ViewHomeComponent } from './home/view-home/view-home.component';

const routes: Routes = [
  { 
    path: '', redirectTo: 'home', pathMatch: 'full' 
  },
  { 
    path: 'home', 
    component: ViewHomeComponent, 
    data: { titulo: 'Home' }
  },
  { 
    path: 'view/:id', 
    component: ViewComponent, 
    data: { titulo: 'Visualizar' }
  },
  { 
    path: 'list', 
    component: ListComponent, 
    data: { titulo: 'Listar' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
