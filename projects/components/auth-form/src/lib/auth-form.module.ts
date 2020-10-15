import { NgModule } from '@angular/core';
import { AuthFormComponent } from './auth-form.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiSignupService } from '@services/api-signup';
import { AlertModule } from '@components/alert';

@NgModule({
  declarations: [AuthFormComponent],
  imports: [
    AlertModule,
    CommonModule,
    FormsModule,
  ],
  providers: [ ApiSignupService ],
  exports: [AuthFormComponent]
})
export class AuthFormModule { }
