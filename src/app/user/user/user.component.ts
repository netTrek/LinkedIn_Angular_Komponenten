import { Component, OnInit } from '@angular/core';

@Component ( {
  selector   : 'in-user',
  templateUrl: './user.component.html',
  styleUrls  : [ './user.component.scss' ]
} )
export class UserComponent implements OnInit {
  testing = true;

  constructor ( ) {
  }

  ngOnInit () {
  }
}
