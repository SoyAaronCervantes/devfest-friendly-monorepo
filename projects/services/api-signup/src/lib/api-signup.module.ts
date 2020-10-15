import { NgModule } from '@angular/core';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { ApiSignupService } from './api-signup.service';

@NgModule({
  imports: [
    AngularFireAuthModule
  ],
  providers: [
    ApiSignupService
  ]
})
export class ApiSignupModule { }
