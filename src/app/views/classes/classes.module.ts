import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClassesRoutingModule } from './classes-routing.module';
import { ClassesComponent } from './classes.component';
import { DetailComponent } from './detail/detail.component';
import { ComponentsModule } from 'src/app/components/components.module';


@NgModule({
  declarations: [
    ClassesComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    ClassesRoutingModule,
    ComponentsModule
  ]
})
export class ClassesModule { }
