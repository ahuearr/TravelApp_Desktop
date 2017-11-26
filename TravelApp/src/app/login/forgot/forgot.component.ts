import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import * as CB from 'cloudboost';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent implements OnInit {

  public email:string;
  public validationErrors = new Array();
  emailControl: FormControl;

  public emailCorrect:boolean;

  constructor() {
    this.emailControl =
      new FormControl('email', Validators.compose([Validators.email]));
    this.emailCorrect=false;
  }

  ngOnInit() {
  }

  onSubmit(){
    this.validationErrors = new Array();
    if(this.email==undefined){
      this.validationErrors.push('Debe introducir el email');
      return;
    }
    if(!this.emailControl.valid){
      this.validationErrors.push('Revise el formato del email');
    }
    if(this.validationErrors.length>0){
      return;
    }

    CB.CloudUser.resetPassword(this.email, {
      success: user => {
        this.emailCorrect=true;
      },
      error: err => {
        this.validationErrors.push(err.response.data.error);
      }
    });
  }
}
