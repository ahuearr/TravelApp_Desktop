import { Component } from '@angular/core';
import * as CB from 'cloudboost';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {
    CB.CloudApp.init('tvrfziynnvci', '9d6b774d-ccf2-4cdb-a7e9-5eacbaaebe96');
  }

}
