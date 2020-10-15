import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AngularFireAuthModule,
    AngularFireModule.initializeApp( environment.firebase ),
    BrowserModule,
    LoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
