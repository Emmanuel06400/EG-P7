import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm!: FormGroup;
  loading!: boolean;
  errorMsg!: string;

  constructor(private formBuilder: FormBuilder,
    private auth: AuthService,
    private router: Router) { }
    
    ngOnInit() {
      this.signupForm = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)]
      });
    }


  onSignup() {
 console.log("entrer code pour authentification")
  }


}
