import { NgModule } from '@angular/core';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { ApiLoginService } from './api-login.service';

@NgModule({
  imports: [ AngularFireAuthModule ],
  providers: [ ApiLoginService ]
})
export class ApiLoginModule { }
