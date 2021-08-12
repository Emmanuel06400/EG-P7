import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
    private auth: AuthService,
    private router: Router) { }

   ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const name = form.value['name'];
    const email = form.value['email'];
    const password = form.value['password'];
    console.log("Envoyer la reponse")
      }

    }
  


