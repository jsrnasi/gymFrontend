import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { AddGymComponent } from './views/add-gym/add-gym.component';
import { AddClassComponent } from './views/add-class/add-class.component';
import { ViewClassComponent } from './views/view-class/view-class.component';
import { ViewGymComponent } from './views/view-gym/view-gym.component';
import { EditClassComponent } from './views/edit-class/edit-class.component';
import { EditGymComponent } from './views/edit-gym/edit-gym.component';
import { ViewQRCodeComponent } from './views/view-qrcode/view-qrcode.component';
import { ViewCouponComponent } from './views/view-coupon/view-coupon.component';
import { AddCouponComponent } from './views/add-coupon/add-coupon.component';
import { EditCouponComponent } from './views/edit-coupon/edit-coupon.component';
import { PaymentComponent } from './views/payment/payment.component';
import { PaymentsuccessComponent } from './views/paymentsuccess/paymentsuccess.component';
import { PaymentfailureComponent } from './views/paymentfailure/paymentfailure.component';
import { ScheduleclassComponent } from './views/scheduleclass/scheduleclass.component';
import { AttendingclassComponent } from './views/attendingclass/attendingclass.component';
import { RefralComponent } from './views/refral/refral.component';
import { ClasspaymentsuccessComponent } from './views/classpaymentsuccess/classpaymentsuccess.component';
import { ClasspaymentfailureComponent } from './views/classpaymentfailure/classpaymentfailure.component';
import { ClassschcComponent } from './views/classschc/classschc.component';
import { ClassattcComponent } from './views/classattc/classattc.component';

const routes: Routes = [
  {
  path:'',
  redirectTo:'home',
  pathMatch:'full'
  },
  {
    path:'addGym',
    component :AddGymComponent
  },

  {
    path:'classPaymentSuccess',
    component :ClasspaymentsuccessComponent
  },

  {
    path:'classPaymentFailure',
    component :ClasspaymentfailureComponent
  },

  {
    path:'classSchedule',
    component :ClassschcComponent
  },

  {
    path:'classAttendance',
    component :ClassattcComponent
  },
  {
    path:'viewGym',
    component :ViewGymComponent
  },
  {
    path:'viewGymQRCode',
    component :ViewQRCodeComponent
  },
  {
    path:'viewClass',
    component :ViewClassComponent
  },
  {
    path:'editGym',
    component :EditGymComponent
  },
  {
    path:'editClass',
    component :EditClassComponent
  },
  {
    path:'viewCoupon',
    component :ViewCouponComponent
  },
  {
    path:'addCoupon',
    component :AddCouponComponent
  },
  {
    path:'editCoupon',
    component :EditCouponComponent
  },
  {
    path: 'payment',
    component: PaymentComponent
  },
  {
    path: 'paymentSuccess',
    component: PaymentsuccessComponent
  },
  {
    path: 'paymentFailure',
    component: PaymentfailureComponent
  },
  {
    path: 'schedule',
    component: ScheduleclassComponent
  },
  {
    path: 'attending',
    component: AttendingclassComponent
  },
  {
    path: 'refral',
    component: RefralComponent
  },
  {
    path:'',
    component:LayoutComponent,
    children:[
      {
        path:'home',
        loadChildren:() =>import('./views/home/home.module').then(m=> m.HomeModule)
      },
      {
        path:'about',
        loadChildren:() =>import('./views/aboutus/aboutus.module').then(m=> m.AboutusModule)
      },
      {
        path:'login-register',
        loadChildren:() =>import('./views/login-register/login-register.module').then(m=> m.LoginRegisterModule)
      },
      {
        path:'classes',
        loadChildren:() =>import('./views/classes/classes.module').then(m=> m.ClassesModule)
      },
      {
        path:'trainers',
        loadChildren:() =>import('./views/trainers/trainers.module').then(m=> m.TrainersModule)
      },
      {
        path:'blogs',
        loadChildren:() =>import('./views/blogs/blogs.module').then(m=> m.BlogsModule)
      },
      {
        path:'contact',
        loadChildren:() =>import('./views/contact/contact.module').then(m=> m.ContactModule)
      },
      {
        path:'shop',
        loadChildren:() =>import('./views/shop/shop.module').then(m=> m.ShopModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled', // Add options right here
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
