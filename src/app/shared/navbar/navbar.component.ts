import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { appState } from '../../app.reducer';
import { Subscription } from 'rxjs';
import { UserModel } from '../../model/user.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {

  public user: UserModel;
  private subscription: Subscription;

  constructor(
    private store: Store<appState>
  ){
    this.subscription = this.store.select('auth').subscribe(({user}) => this.user = user);
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
  }

}
