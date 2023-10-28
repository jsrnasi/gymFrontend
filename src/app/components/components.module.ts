import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ClassesProvideComponent } from './classes-provide/classes-provide.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';



@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    TestimonialsComponent,
    ClassesProvideComponent,
    SidemenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    TestimonialsComponent,
    ClassesProvideComponent,
    SidemenuComponent
  ]
})
export class ComponentsModule { }
