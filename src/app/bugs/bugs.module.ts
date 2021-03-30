import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BugsRoutingModule } from './bugs-routing.module';
import { BugsDashboardComponent } from './components/bugs-dashboard/bugs-dashboard.component';
import { BugsTechnologyComponent } from './components/bugs-technology/bugs-technology.component';
import { CommonsModule } from '../commons/commons.module';
import { BugsMapperService } from './services/bugs-mapper.service';
import { BugsGenericService } from './services/bugs-generic.service';

// import { AgGridModule } from 'ag-grid-angular';
@NgModule({
  declarations: [BugsDashboardComponent, BugsTechnologyComponent],
  imports: [
    CommonModule,
    BugsRoutingModule,
    CommonsModule,
    // AgGridModule.withComponents([])
  ],
  providers: [BugsMapperService, BugsGenericService]
})
export class BugsModule { }
