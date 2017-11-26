import { Component, OnInit } from '@angular/core';
import * as CB from 'cloudboost';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', '../../app.component.css']
})
export class LoginComponent implements OnInit {

  public usuario:string;
  public password:string;
  
  ngOnInit(): void {
  }

  onSubmit(){
    console.log('Submit');
    let user = new CB.CloudUser();
    user.set('username', this.usuario);
    user.set('password', this.password);
    user.logIn({
    success: function(user) {
      console.log('Login correcto');
    },
    error: function(err) {
      console.log('Login erroneo:'+err);
    }
    });
  }
}
