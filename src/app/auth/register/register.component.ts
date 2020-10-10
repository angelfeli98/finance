import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidatorsEmail } from '../../validators/email.validator';
import { UserService } from '../../services/user.service';
import { UserSignUp } from '../../interfaces/user.signUp';
import { Router } from '@angular/router';
import { AlertService } from '../../services/alert.service';

import Swal from 'sweetalert2';
import { Store } from '@ngrx/store';
import { appState } from 'src/app/app.reducer';
import { Subscription } from 'rxjs';
import { stopLoading, isLoadig } from 'src/app/shared/ui.actions';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, OnDestroy {

  public loading: boolean;
  public form: FormGroup;
  private subscription: Subscription;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
    private alertService: AlertService,
    private store: Store<appState>
  ){
    this.makeForm();
    this.subscription = this.store.select('ui').subscribe( ui => this.loading = ui.isLoading );
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void{
    this.subscription.unsubscribe();
  }

  public makeForm = (): FormGroup =>
    this.form = this.fb.group({
      user: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)
    })

  public onSubmit = (): void => {
    // Swal.fire({title: 'Upload', text: 'loading....'});
    // Swal.showLoading();
    const data: UserSignUp = this.form.value;
    this.store.dispatch(isLoadig());
    this.userService.signUpUser(data)
                  .then( res => {
                    // Swal.close();
                    this.store.dispatch(stopLoading());
                    this.router.navigateByUrl('');
                  })
                  .catch(err => {
                    this.store.dispatch(stopLoading());
                    this.alertService.makeAlert('Ups...', err.message, 'error')
                  });
  }

}
