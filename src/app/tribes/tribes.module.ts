import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TribesRoutingModule } from './tribes-routing.module';
import { TribesDashboardComponent } from './components/tribes-dashboard/tribes-dashboard.component';
import { CommonsModule } from '../commons/commons.module';
// import { BugsMapperService } from './services/bugs-mapper.service';
// import { BugsGenericService } from './services/bugs-generic.service';

// import { AgGridModule } from 'ag-grid-angular';
@NgModule({
  declarations: [TribesDashboardComponent],
  imports: [
    CommonModule,
    TribesRoutingModule,
    CommonsModule,
    // AgGridModule.withComponents([])
  ],
//   providers: [BugsMapperService, BugsGenericService]
})
export class BugsModule { }
