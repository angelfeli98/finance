import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { appState } from 'src/app/app.reducer';
import { Move } from '../../interfaces/moves.interface';
import { Subscription } from 'rxjs';
import { EntryExitSevice } from '../../services/entry-exit.service';
import { appStateWithMoves } from '../entry-exit.reducer';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit, OnDestroy {

  public moves: Move[];
  private subscription: Subscription;

  constructor(
    private store: Store<appStateWithMoves>,
    private eeS: EntryExitSevice,
  ){
    this.moves = [];
    this.subscription = this.store.select('moves').subscribe( ({moves}) => this.moves = moves );
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void{
    this.subscription.unsubscribe();
  }

  public removeItem = (id: string): void => {
    this.eeS.deleteItem(id);
  }

}
