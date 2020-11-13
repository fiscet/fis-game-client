import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from "../../services/authentication.service"
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  mainForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private auth: AuthenticationService, private router: Router) { }

  ngOnInit(): void {

    this.mainForm = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
      remember: new FormControl(),
    });

    this.mainForm = this.formBuilder.group({
      email: ['nilson@email.com', [Validators.required, Validators.email]],
      password: ['nilson', [Validators.required, Validators.minLength(6)]], 
      // email: ['eve.holt@reqres.in', [Validators.required, Validators.email]],
      // password: ['cityslicka', [Validators.required, Validators.minLength(6)]],
      remember: ['false'],
      // title: ['', Validators.required],
      // firstName: ['', Validators.required],
      // lastName: ['', Validators.required],
      // // validates date format yyyy-mm-dd
      // dob: ['', [Validators.required, Validators.pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)]],
      // confirmPassword: ['', Validators.required],
      // acceptTerms: [false, Validators.requiredTrue]
    },
      // {
      //   validator: MustMatch('password', 'confirmPassword')
      // }
    );
  }

  get f() { return this.mainForm.controls; }

  handleSubmit() {
    this.submitted = true;

    if (this.mainForm.invalid) {
      console.log("Login form INVALID")
      return;
    }

    this.auth.login(this?.f?.email?.value, this?.f?.password?.value).subscribe(res => {
      console.log("Login form submitted", res)
      this.router.navigate(['/dashboard'])
    })


  }

  handleReset() {
    this.submitted = false;
    this.mainForm.reset();
  }

}
