import { Component, OnInit } from '@angular/core';
import { UserNameComponent } from '../user-name/user-name.component';

@Component({
  selector: 'in-user-name-derivative',
  templateUrl: './user-name-derivative.component.html',
  styleUrls: [
    '../user-name/user-name.component.scss',
    './user-name-derivative.component.scss'
  ]
})
export class UserNameDerivativeComponent extends UserNameComponent {

}
