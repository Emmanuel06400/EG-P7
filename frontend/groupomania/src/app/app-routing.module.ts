import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './components/auth/signin/signin.component';
import { ProfilUserComponent } from './components/profil-user/profil-user.component';
import { PublicationListComponent } from './components/publication-list/publication-list.component';

const routes: Routes = [
  {
    path: 'login',
    component: SigninComponent,
  },
  {
    path: 'publications',
    component: PublicationListComponent,
  },
  {
    path: 'profile',
    component: ProfilUserComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'publications'
  },
  {
    path: '**',
    redirectTo: 'publications'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
