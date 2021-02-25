import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BugsDashboardComponent } from './components/bugs-dashboard/bugs-dashboard.component';

const routes: Routes = [{path: 'bugsdashboard', component: BugsDashboardComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BugsRoutingModule { }
