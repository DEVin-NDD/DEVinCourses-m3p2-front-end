import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { UserAuthRoutingModule } from './user-auth-routing.module';
import { UserAuthComponent } from './user-auth.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegistrationComponent } from './registration/registration.component';

@NgModule({
  declarations: [
    UserAuthComponent,
    LoginFormComponent,
    RegistrationComponent,

  ],
  imports: [
    CommonModule,
    UserAuthRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class UserAuthModule { }
