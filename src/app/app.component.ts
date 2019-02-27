import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  whichPanel: number;

  constructor() {
  }

  ngOnInit() {
    this.whichPanel = 0; // welcome panel
  }

  search() {
    this.whichPanel = 1; // search panel
  }

  add() {
    this.whichPanel = 2; // search panel
  }

  delete() {
    this.whichPanel = 3; // delete panel
  }

}
