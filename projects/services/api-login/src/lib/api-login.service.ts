import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { UserAuthInterface } from '@interfaces/user-auth';

@Injectable({
  providedIn: 'platform'
})
export class ApiLoginService {

  constructor(
    private angularFireAuth: AngularFireAuth
  ) { }

  emailAndPassword( user: UserAuthInterface ): void {
    this.angularFireAuth.signInWithEmailAndPassword( user.email, user.password ).then();
  }
}
