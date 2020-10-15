import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';

import { AppComponent } from './app.component';

import { environment } from '../environments/environment';

import { AuthStateService } from '@services/auth-state';

import { AuthFormModule } from '@components/auth-form';
import { LogoutModule } from '@components/logout';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AngularFireAuthModule,
    AngularFireModule.initializeApp( environment.firebase ),
    AuthFormModule,
    BrowserModule,
    LogoutModule
  ],
  providers: [ AuthStateService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
