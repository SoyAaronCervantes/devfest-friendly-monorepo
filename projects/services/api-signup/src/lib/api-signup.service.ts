import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { UserAuthInterface } from '@interfaces/user-auth';

@Injectable({
  providedIn: 'platform'
})
export class ApiSignupService {

  constructor(
    private angularFireAuth: AngularFireAuth
  ) { }

  async emailAndPassword( user: UserAuthInterface ): Promise<void> {
    await this.angularFireAuth.createUserWithEmailAndPassword( user.email, user.password );
  }
}
