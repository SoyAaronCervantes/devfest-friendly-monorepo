import { NgModule } from '@angular/core';
import { AuthStateService } from './auth-state.service';
import { AngularFireAuthModule } from '@angular/fire/auth';

@NgModule({
  imports: [ AngularFireAuthModule ],
  providers: [ AuthStateService ],
  exports: [ AngularFireAuthModule ]
})
export class AuthStateModule { }
