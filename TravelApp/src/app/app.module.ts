import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';



const routes = [
  {'path': 'login', name: 'login', loadChildren: 'app/login/login/login.module#LoginModule'},
  {'path': 'forgot', name: 'forgot', loadChildren: 'app/login/forgot/forgot.module#ForgotModule'},
  {'path': 'signup', name: 'signup', loadChildren: 'app/login/signup/signup.module#SignupModule'},
  ];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
