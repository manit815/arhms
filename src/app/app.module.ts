import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { DemoMaterialModule } from './material.module';
import { GridComponent } from './pages/grid/grid.component';
import { EngineeringComponent } from './pages/engineering/engineering.component';
import { BugsComponent } from './pages/bugs/bugs.component';
import { TribesComponent } from './pages/tribes/tribes.component';
import { QualityComponent } from './pages/quality/quality.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    GridComponent,
    EngineeringComponent,
    BugsComponent,
    TribesComponent,
    QualityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    DemoMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
