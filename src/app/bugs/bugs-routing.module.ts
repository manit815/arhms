import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BugsComponent } from "../../app/pages/bugs/bugs.component";
import { BugsDashboardComponent } from './components/bugs-dashboard/bugs-dashboard.component';
import { BugsTechnologyComponent } from './components/bugs-technology/bugs-technology.component';

const routes: Routes = [
  {
    path: "",
    component: BugsComponent,
    children: [ {path: 'bugsdashboard', component: BugsDashboardComponent}, 
                {path: "bugstechnology", component: BugsTechnologyComponent}
              ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BugsRoutingModule { };
export const BugsRoutingComponents = [BugsComponent, BugsDashboardComponent, BugsTechnologyComponent];
