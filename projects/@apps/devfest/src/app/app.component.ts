import { Component } from '@angular/core';
import { AuthStateService } from '@services/auth-state';
import { Observable } from 'rxjs';
import { FirebaseError, User } from 'firebase';
import { UserAuthInterface } from '@interfaces/user-auth';
import { ApiSignupService } from '@services/api-signup';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '@apps/devfest';
  user$: Observable<User>;
  error: FirebaseError;

  constructor(
    private authStateService: AuthStateService,
    private apiSignupService: ApiSignupService

  ) {
    this.user$ = this.authStateService.authFirebaseState$;
  }

  async submit( value: UserAuthInterface ): Promise<void> {

    await this.apiSignupService.emailAndPassword( value )
      .then( () => this.error = undefined )
      .catch( reason => this.error = reason );

  }
}
