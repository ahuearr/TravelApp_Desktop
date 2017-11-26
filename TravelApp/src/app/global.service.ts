import {Injectable} from '@angular/core';
import * as CB from 'cloudboost';

@Injectable()
export class GlobalService {
  constructor(){

  }

  removeCurrentUser(){
    CB.CloudUser.getCurrentUser({
      success: currentUser => {
        if(currentUser.username!=undefined){
          currentUser.logOut();
        }
      },
      error: err => {
        console.log('Error:'+err.response.data.error);
      }
    });
  }

}
