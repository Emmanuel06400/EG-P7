import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuardService } from './services/auth-guard.service';


import { SigninComponent } from './components/auth/signin/signin.component';
import { SignupComponent } from './components/auth/signup/signup.component'; 
import { ProfilUserComponent } from './components/profil-user/profil-user.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { PostsComponent } from './components/posts/posts.component';

const routes: Routes = [
  { path: '', redirectTo: '/signin', pathMatch: 'full' },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'ProfilUser', component: ProfilUserComponent },
  { path: 'MyProfile', component: MyProfileComponent },
  { path: 'Posts', component: PostsComponent },
  { path: 'edit', component: SigninComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
