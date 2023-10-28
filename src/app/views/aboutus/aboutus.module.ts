import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutusRoutingModule } from './aboutus-routing.module';
import { AboutusComponent } from './aboutus.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { LightboxModule } from 'ngx-lightbox';


@NgModule({
  declarations: [
    AboutusComponent
  ],
  imports: [
    CommonModule,
    AboutusRoutingModule,
    ComponentsModule,
    LightboxModule
  ]
})
export class AboutusModule { }
