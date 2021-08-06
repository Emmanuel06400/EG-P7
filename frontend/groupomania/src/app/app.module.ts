import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
//import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { SigninComponent } from './components/auth/signin/signin.component';

import { AuthGuardService } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { PostService } from './services/post.service';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    //HttpClientModule
  ],
  providers: [AuthGuardService, AuthService, PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
