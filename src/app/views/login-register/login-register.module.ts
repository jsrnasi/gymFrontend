import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRegisterRoutingModule } from './login-register-routing.module';
import { LoginRegisterComponent } from './login-register.component';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule, ToastNoAnimation, ToastNoAnimationModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    LoginRegisterComponent
  ],
  imports: [
    CommonModule,
    LoginRegisterRoutingModule,
    HttpClientModule,
    // BrowserAnimationsModule, // required animations module
    ToastNoAnimationModule.forRoot(), // ToastrModule added
  ]
})
export class LoginRegisterModule { }
