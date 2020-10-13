import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { UserModel } from '../../model/user.model';
import { Store } from '@ngrx/store';
import { appState } from 'src/app/app.reducer';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit, OnDestroy {

  public user: UserModel;
  private subs: Subscription;

  constructor(
    private userService: UserService,
    private router: Router,
    private store: Store<appState>
  ){
    this.subs = this.store.select('auth').subscribe(({user}) => this.user = user);
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  public signOut = async (): Promise<void> => {
    await this.userService.signOutUser();
    this.router.navigateByUrl('/login');
  }
}
