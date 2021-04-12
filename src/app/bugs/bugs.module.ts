import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BugsRoutingModule, BugsRoutingComponents } from './bugs-routing.module';
import { CommonsModule } from '../commons/commons.module';
import { BugsMapperService } from './services/bugs-mapper.service';
import { BugsGenericService } from './services/bugs-generic.service';

@NgModule({
  declarations: [BugsRoutingComponents],
  imports: [
    CommonModule,
    BugsRoutingModule,
    CommonsModule
  ],
  providers: [BugsMapperService, BugsGenericService]
})

export class BugsModule { }
