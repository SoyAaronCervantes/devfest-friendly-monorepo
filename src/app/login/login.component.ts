import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { auth, FirebaseError } from 'firebase';
import { LoginInterface } from './login.interface';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  showAlert = false;
  message: string;

  constructor(
    public angularFireAuth: AngularFireAuth
  ) {}

  ngOnInit(): void {}

  async submit( form: NgForm ): Promise<void> {

    if ( form.value === null || form.invalid ) { return; }

    const user: LoginInterface = form.value;

    await this.angularFireAuth.createUserWithEmailAndPassword( user.email, user.password )
      .catch( ( reason: FirebaseError ) => {
        this.showAlert = true;
        this.message = reason.message;
        setTimeout( () => this.showAlert = false, 2000 );
      });

  }

  async logout(): Promise<void> {
    await this.angularFireAuth.signOut();
  }

  async loginGoogle(): Promise<void> {
    await this.angularFireAuth.signInWithPopup( new auth.GoogleAuthProvider() );
  }

}
