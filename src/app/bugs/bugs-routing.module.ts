import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BugsMenuComponent } from './components/bugs-menu/bugs-menu.component';
import { BugsDashboardComponent } from './components/bugs-dashboard/bugs-dashboard.component';
import { BugsTechnologyComponent } from './components/bugs-technology/bugs-technology.component';

const routes: Routes = [
  {
    path: "",
    component: BugsMenuComponent,
    children: [ 
                {path: '', component: BugsDashboardComponent},
                {path: 'bugsdashboard', component: BugsDashboardComponent}, 
                {path: "bugstechnology", component: BugsTechnologyComponent}
              ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class BugsRoutingModule { };