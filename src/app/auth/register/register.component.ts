import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidatorsEmail } from '../../validators/email.validator';
import { UserService } from '../../services/user.service';
import { UserSignUp } from '../../interfaces/user.signUp';
import { Router } from '@angular/router';
import { AlertService } from '../../services/alert.service';

import Swal from 'sweetalert2';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
    private alertService: AlertService
  ){
    this.makeForm()
  }

  ngOnInit(): void {
  }

  public makeForm = (): FormGroup =>
    this.form = this.fb.group({
      user: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)
    })

  public onSubmit = (): void => {
    Swal.fire({title: 'Upload', text: 'loading....'});
    Swal.showLoading();
    const data: UserSignUp = this.form.value;
    this.userService.signUpUser(data)
                  .then( res => {
                    Swal.close();
                    this.router.navigateByUrl('');
                  })
                  .catch(err => this.alertService.makeAlert('Ups...', err.message, 'error'));
  }

}
