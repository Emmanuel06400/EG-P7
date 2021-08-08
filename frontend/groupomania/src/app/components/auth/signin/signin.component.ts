import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  signinForm!: FormGroup;
  errorMsg!: string;

  constructor(private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router) { }

   ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.signinForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)],
      name: ['', Validators.required]
    });
  }



  onSubmit() {
    console.log("entrer code pour authentification")
    const email = this.signinForm.get('email')?.value;
    const name = this.signinForm.get('name')?.value;
    const password = this.signinForm.get('password')?.value;
    this.authService.createUser(email, password, name).then(
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
