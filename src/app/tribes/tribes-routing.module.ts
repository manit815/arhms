import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TribesDashboardComponent } from './components/tribes-dashboard/tribes-dashboard.component';

const routes: Routes = [{path: 'tribedashboard', component: TribesDashboardComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TribesRoutingModule { }
