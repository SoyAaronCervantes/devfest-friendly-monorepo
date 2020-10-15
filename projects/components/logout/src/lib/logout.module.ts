import { NgModule } from '@angular/core';
import { LogoutComponent } from './logout.component';
import { CommonModule } from '@angular/common';
import { AuthStateService } from '@services/auth-state';



@NgModule({
  declarations: [LogoutComponent],
  imports: [ CommonModule ],
  providers: [ AuthStateService ],
  exports: [LogoutComponent]
})
export class LogoutModule { }
