import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../shared/shared.module';
import { RegisterComponent } from './dialog/register/register.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth.interceptor';
import { MenuComponent } from './menu/menu.component';



@NgModule({
  declarations: [LoginComponent, LayoutComponent, RegisterComponent, MenuComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ]
})
export class CoreModule { }
