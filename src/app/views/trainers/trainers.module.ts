import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrainersRoutingModule } from './trainers-routing.module';
import { TrainersComponent } from './trainers.component';
import { DetailComponent } from './detail/detail.component';
import { ComponentsModule } from 'src/app/components/components.module';


@NgModule({
  declarations: [
    TrainersComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    TrainersRoutingModule,
    ComponentsModule
  ]
})
export class TrainersModule { }
