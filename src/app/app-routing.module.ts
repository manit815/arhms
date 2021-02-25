import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EngineeringComponent } from './pages/engineering/engineering.component';
import { BugsComponent } from './pages/bugs/bugs.component';
import { TribesComponent } from './pages/tribes/tribes.component';
import { QualityComponent } from './pages/quality/quality.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'bugs',
    loadChildren: () => import('./bugs/bugs.module').then(m => m.BugsModule)
  }
  // {
  //   path: 'engineering',
  //   component: EngineeringComponent
  // },
  // {
  //   path: 'bugs',
  //   component: BugsComponent
  // },
  // {
  //   path: 'tribes',
  //   component: TribesComponent
  // },
  // {
  //   path: 'quality',
  //   component: QualityComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
