import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import * as CB from 'cloudboost';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public usuario:string;
  public email:string;
  public password:string;
  public confirmPassword:string;

  public validationErrors = new Array();
  emailControl: FormControl;

  public userCreationSuccessful:boolean;

  constructor() {
    this.emailControl =
      new FormControl('email', Validators.compose([Validators.email]));
    this.userCreationSuccessful=false;
  }

  ngOnInit() {
  }

  onSubmit(){
    this.validationErrors = new Array();
    if(this.usuario==undefined || this.email==undefined || this.password==undefined || this.confirmPassword==undefined){
      this.validationErrors.push('Todos los campos son obligatorios');
      return;
    }
    if(!this.emailControl.valid){
      this.validationErrors.push('Revise el formato del email');
    }
    if(this.password!=this.confirmPassword){
      this.validationErrors.push('Las contraseñas no coinciden');
    }
    if(this.validationErrors.length>0){
      return;
    }
    var user = new CB.CloudUser();
    user.set('username', this.usuario);
    user.set('password', this.password);
    user.set('email', this.email);
    user.signUp({
      success: user => {
        this.userCreationSuccessful=true;
        user.logOut();
      },
      error: err => {
        this.validationErrors.push(err.response.data.error);
      }
    });
  }
}
