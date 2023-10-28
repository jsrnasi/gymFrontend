import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { RouterModule } from '@angular/router';
import { FancyboxDirective } from './directives/fancybox.directive';
import { LightboxModule } from 'ngx-lightbox';
import { AddGymComponent } from './views/add-gym/add-gym.component';

import { FormsModule } from '@angular/forms';
import { AddClassComponent } from './views/add-class/add-class.component';
import { HttpClientModule } from '@angular/common/http';
import { ViewClassComponent } from './views/view-class/view-class.component';
import { ViewGymComponent } from './views/view-gym/view-gym.component';
import { EditGymComponent } from './views/edit-gym/edit-gym.component';
import { EditClassComponent } from './views/edit-class/edit-class.component';
import { GymService } from './service/gym.service';
import { ClassService } from './service/class.service';
import { ViewQRCodeComponent } from './service/view-qrcode/view-qrcode.component';
import { CommonModule } from '@angular/common';
import { AddCouponComponent } from './views/add-coupon/add-coupon.component';
import { ViewCouponComponent } from './views/view-coupon/view-coupon.component';
import { EditCouponComponent } from './views/edit-coupon/edit-coupon.component';
import { PaymentComponent } from './views/payment/payment.component';
import { PaymentsuccessComponent } from './views/paymentsuccess/paymentsuccess.component';
import { PaymentfailureComponent } from './views/paymentfailure/paymentfailure.component';
import { ScheduleclassComponent } from './views/scheduleclass/scheduleclass.component';
import { AttendingclassComponent } from './views/attendingclass/attendingclass.component';  
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RefralComponent } from './views/refral/refral.component';
import { ClasspaymentsuccessComponent } from './views/classpaymentsuccess/classpaymentsuccess.component';
import { ClasspaymentfailureComponent } from './views/classpaymentfailure/classpaymentfailure.component';
import { ClassschcComponent } from './views/classschc/classschc.component';
import { ClassattcComponent } from './views/classattc/classattc.component';

@NgModule({
  declarations: [
    AppComponent,
    FancyboxDirective,
    AddGymComponent,
    AddClassComponent,
    ViewClassComponent,
    ViewGymComponent,
    EditGymComponent,
    EditClassComponent,
    ViewQRCodeComponent,
    AddCouponComponent,
    ViewCouponComponent,
    EditCouponComponent,
    PaymentComponent,
    PaymentsuccessComponent,
    PaymentfailureComponent,
    ScheduleclassComponent,
    AttendingclassComponent,
    RefralComponent,
    ClasspaymentsuccessComponent,
    ClasspaymentfailureComponent,
    ClassschcComponent,
    ClassattcComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    RouterModule,
    LightboxModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    NgxMaterialTimepickerModule,
    BrowserAnimationsModule,
    NoopAnimationsModule
  ],
  providers: [GymService,ClassService],
  bootstrap: [AppComponent]
})
export class AppModule { }
