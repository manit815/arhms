import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpService } from './services/http.service';
import { ChartsComponent } from './components/charts/charts.component';
import { ChartModule } from 'primeng/chart';
import { TableComponent } from './components/table/table.component';
import { AgGridModule } from 'ag-grid-angular';
import { InfoComponent } from './components/info/info.component';
import { ErrorComponent } from './components/error/error.component';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  declarations: [ChartsComponent, TableComponent, InfoComponent, ErrorComponent, LoaderComponent],
  imports: [
    CommonModule,
    ChartModule,
    AgGridModule.withComponents([])
  ],
  providers:[
    HttpService
  ],
  exports: [ChartsComponent, TableComponent],
  // schemas: [
  //   CUSTOM_ELEMENTS_SCHEMA,
  //   NO_ERRORS_SCHEMA
  // ]
})
export class CommonsModule { }
