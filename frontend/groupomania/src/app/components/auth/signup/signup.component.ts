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
  errorMsg!: string;

  constructor(private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router) { }
    
    ngOnInit() {
      this.initForm();
    }


    initForm() {
      this.signupForm = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required, Validators.pattern(/[0-9a-zA-Z]/)],
      });
    }


  onSubmit() {
    console.log("entrer code pour authentification")
    const email = this.signupForm.get('email')?.value;
    const name = this.signupForm.get('name')?.value;
    const password = this.signupForm.get('password')?.value;
    this.authService.loginUser(email, password).then(
          () => {
            this.router.navigate(['/publication-list']);
          },
          (error) => {
            console.error(error);
            this.errorMsg = error.message;
          }
        );
      }

}
