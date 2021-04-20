import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BugsRoutingModule } from './bugs-routing.module';
import { CommonsModule } from '../commons/commons.module';
import { BugsMapperService } from './services/bugs-mapper.service';
import { BugsGenericService } from './services/bugs-generic.service';
import { BugsMenuComponent } from './components/bugs-menu/bugs-menu.component';
import { BugsDashboardComponent } from './components/bugs-dashboard/bugs-dashboard.component';
import { BugsTechnologyComponent } from './components/bugs-technology/bugs-technology.component';

@NgModule({
  declarations: [BugsMenuComponent, BugsDashboardComponent, BugsTechnologyComponent],
  imports: [
    CommonModule,
    BugsRoutingModule,
    CommonsModule
  ],
  providers: [BugsMapperService, BugsGenericService]
})

export class BugsModule { }
