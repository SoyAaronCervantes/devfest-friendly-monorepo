import { Component, Input, OnInit } from '@angular/core';
import { AuthStateService } from '@services/auth-state';
import { User } from 'firebase';

@Component({
  selector: 'components-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  @Input() user: User;

  constructor(
    private authStateService: AuthStateService
  ) { }

  ngOnInit(): void { }

  async logout(): Promise<void> {
    await this.authStateService.logout();
  }

}
