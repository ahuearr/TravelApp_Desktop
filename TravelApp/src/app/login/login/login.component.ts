import { Component, OnInit } from '@angular/core';
import { GlobalService} from "../../global.service";
import * as CB from 'cloudboost';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', '../../app.component.css'],
  providers: [GlobalService]
})
export class LoginComponent implements OnInit {

  public usuario:string;
  public password:string;

  constructor(private _globalService: GlobalService){}

  ngOnInit(): void {
    this._globalService.removeCurrentUser();
  }

  onSubmit(){
    console.log('Submit');
    let user = new CB.CloudUser();
    user.set('username', this.usuario);
    user.set('password', this.password);
    user.logIn({
      success: user => {
        console.log('Login correcto');
      },
      error: err => {
        console.log('Login erroneo:'+err.response.data.error);
      }
    });
  }
}
