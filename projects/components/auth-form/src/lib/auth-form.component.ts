import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiSignupService } from '@services/api-signup';
import { UserAuthInterface } from '@interfaces/user-auth';
import { from, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { FirebaseError } from 'firebase';

@Component({
  selector: 'components-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss']
})
export class AuthFormComponent implements OnInit {

  @Input() error: FirebaseError;
  @Output() private formValue: EventEmitter<UserAuthInterface>;

  constructor() {
    this.formValue = new EventEmitter<UserAuthInterface>();
  }

  ngOnInit(): void { }

  submit( form: NgForm ): void {

    if ( form.value === null || form.invalid ) { return; }

    const user: UserAuthInterface = form.value;

    this.formValue.emit( user );

  }

}
