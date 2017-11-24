import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ForgotComponent } from './login/forgot/forgot.component';



const routes = [
  {'path': 'login', name: 'login', loadChildren: 'app/login/login/login.module#LoginModule'},
  {'path': 'forgot', name: 'forgot', component: ForgotComponent},
  {'path': 'signup', name: 'signup', loadChildren: 'app/login/signup/signup.module#SignupModule'},
  ];

@NgModule({
  declarations: [
    AppComponent,
    ForgotComponent,
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
