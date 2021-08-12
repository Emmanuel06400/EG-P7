import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { User } from '../models/user.model';


@Injectable({
  providedIn: 'root'
})

export class AuthService {
  
  isAuth$ = new BehaviorSubject<boolean>(false);
  //private authToken!: string;
  private userId!: string;

  constructor(private http: HttpClient,
    private router: Router) {}

    createUser(email: string, password: string, name: string): Promise<number>{
      return new Promise<number>((resolve, reject) => {
          this.http.post('http://localhost:4000/', {email: email, password: password, name: name}).toPromise()
          .then((res: any) => {
            // Success
            resolve(1);
          },
            err => {
              // Error
              reject(err);
            }
          );
      })
  }


/*

getToken() {
  return this.authToken;
}

getUserId() {
  return this.userId;
}
*/

loginUser(email: string, password: string) {
  return new Promise((resolve, reject) => {
    this.http.post('http://localhost:3000/api/auth/login', {email: email, password: password}).subscribe/*(
      (response: {userId: string, token: string}) => {
        this.userId = response.userId;
        this.authToken = response.token;
        this.isAuth$.next(true);
        resolve();
      },
      (error) => {
        reject(error);
      }
    )*/; console.log("message envoyé")

  });
}

logout() {
  //this.authToken = null;
  //this.userId = null;
  this.isAuth$.next(false);
  this.router.navigate(['signin']);
}

}

