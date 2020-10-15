import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'components-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

  @Input() showAlert: boolean;
  @Input() message: string;

  constructor() { }

  ngOnInit(): void { }

}
