import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { AlertService } from '../../services/alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
    private alertService: AlertService
  ){
    this.makeForm();
  }

  ngOnInit(): void {
  }

  private makeForm = (): FormGroup =>
          this.form = this.fb.group({
            email: new FormControl('', [Validators.required, Validators.email]),
            password: new FormControl('', Validators.required)
          })

  public signIn = (): void => {
    const data = this.form.value;
    if(this.form.valid){
      this.userService.singInUser(data)
                    .then(res => this.router.navigateByUrl(''))
                    .catch(err => this.alertService.makeAlert('Ups...', 'Wrong username or password', 'error'));
    }
  }

}
