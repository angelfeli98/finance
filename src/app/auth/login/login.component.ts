import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Store } from '@ngrx/store';

import { appState } from '../../app.reducer';
import { isLoadig, stopLoading } from 'src/app/shared/ui.actions';
import { UserService } from '../../services/user.service';
import { AlertService } from '../../services/alert.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  public form: FormGroup;
  public loading: boolean;
  private sub: Subscription;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
    private alertService: AlertService,
    private store: Store<appState>
  ){
    this.loading = false;
    this.makeForm();
    this.sub = this.store.select('ui').subscribe( ui => this.loading = ui.isLoading);
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void{
    this.sub.unsubscribe();
  }

  private makeForm = (): FormGroup =>
          this.form = this.fb.group({
            email: new FormControl('', [Validators.required, Validators.email]),
            password: new FormControl('', Validators.required)
          })

  public signIn = (): void => {
    this.store.dispatch(isLoadig());
    const data = this.form.value;
    if (this.form.valid){
      this.userService.singInUser(data)
                    .then(res => {
                      this.store.dispatch(stopLoading());
                      this.router.navigateByUrl('');
                    })
                    .catch(err => {
                      this.store.dispatch(stopLoading());
                      this.alertService.makeAlert('Ups...', 'Wrong username or password', 'error')
                    });
    }
  }

}
