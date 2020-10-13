import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { EntryExitSevice } from '../services/entry-exit.service';
import { State, Store } from '@ngrx/store';
import { appState } from '../app.reducer';
import { AlertService } from '../services/alert.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-entry-exit',
  templateUrl: './entry-exit.component.html',
  styleUrls: ['./entry-exit.component.css']
})
export class EntryExitComponent implements OnInit, OnDestroy{

  public form: FormGroup;
  public loading: boolean;
  private subscriptions: Subscription;

  constructor(
    private fb: FormBuilder,
    private entryExitService: EntryExitSevice,
    private store: Store<appState>,
    private alertService: AlertService
  ){
    this.makeForm();
    this.subscriptions = this.store.select('ui').subscribe( ({isLoading}) => this.loading = isLoading );
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  public makeForm = (): FormGroup =>
    this.form = this.fb.group({
      description: new FormControl('', Validators.required),
      mount: new FormControl(null, [Validators.min(0), Validators.required]),
      type: new FormControl('entry')
  })

  public onSubmit = (): void => {
    if (this.form.valid){
      this.entryExitService.addItem(this.form.value)
        .then(res => {
          this.alertService.makeAlert('Success', `Your ${this.form.get('type').value} has been saved`, 'success');
          this.form.reset();
        }).catch(err => {
          this.form.reset();
          this.alertService.makeAlert('Ops...', `Something is bad :(`, 'error');
        })
    }
  }
}
