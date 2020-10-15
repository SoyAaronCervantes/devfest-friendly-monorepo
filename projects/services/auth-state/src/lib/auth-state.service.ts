import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { User } from 'firebase';

@Injectable({
  providedIn: 'platform'
})
export class AuthStateService {

  constructor(
    private angularFireAuth: AngularFireAuth
  ) { }

  get authFirebaseState$(): Observable<User> {
    return this.angularFireAuth.user;
  }

  async logout(): Promise<void> {
    await this.angularFireAuth.signOut();
  }

}
