import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from './api.service'
import { UserModel } from './models/user.model'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  mainForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private api: ApiService, private router: Router) { }

  ngOnInit(): void {

    this.mainForm = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
      remember: new FormControl(),
    });

    this.mainForm = this.formBuilder.group({
      email: ['eve.holt@reqres.in', [Validators.required, Validators.email]],
      password: ['cityslicka', [Validators.required, Validators.minLength(6)]],
      remember: ['false'],
      // title: ['', Validators.required],
      // firstname: ['', Validators.required],
      // lastname: ['', Validators.required],
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
      console.log("Register form INVALID")
      return;
    }

    const newUser: UserModel = {
      id: null,
      email: this?.f?.email?.value,
      pwd: this?.f?.password?.value,
      firstname: "",
      lastname: "",
      createdAt: new Date(),
      modifiedAt: null,
      deletedAt: null
    };

    this.api.create(newUser).subscribe(res => {
      console.log("Register form submitted", res)
      this.router.navigate(['/dashboard'])
    })


  }

  handleReset() {
    this.submitted = false;
    this.mainForm.reset();
  }

}
