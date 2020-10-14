
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { appState } from '../app.reducer';
import { UserModel } from '../model/user.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { Move } from '../interfaces/moves.interface';
import { isLoadig, stopLoading } from 'src/app/shared/ui.actions';
import { filter, switchMap, tap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';
import { authState } from '../auth/auth.reducer';
import { setMoves } from '../entry-exit/entry-exit.actions';
import Swal from 'sweetalert2';

@Injectable({
    providedIn: 'root'
})
export class EntryExitSevice{

    private user: UserModel;

    constructor(
        private store: Store<appState>,
        private afs: AngularFirestore
    ){
        this.store.select('auth')
        .pipe(  filter( res => res?.user !== null ),
                tap(auth => this.user = auth?.user),
                switchMap( (value: authState, index: number) =>
                    this.afs.doc(`${this.user?.uid}/moves`).collection('entry-exit').valueChanges()
        )).subscribe( (moves: Move[]) =>
            this.store.dispatch(setMoves({moves}))
        );
    }

    public addItem = async (move: Move): Promise<void> => {
        this.store.dispatch(isLoadig());
        const moveSaved = await this.afs.doc(`${this.user.uid}/moves`)
                .collection('entry-exit').add(move);
        await this.afs.doc(`${this.user.uid}/moves/entry-exit/${moveSaved.id}`).set({...move, uid: moveSaved.id});
        this.store.dispatch(stopLoading());
    }

    public deleteItem = async (uid: string): Promise<void> => {
        const res = await Swal.fire({
            title: 'Are you sure?',
            text: 'You are going to delete this item',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, I am sure!'
          })

        if (res.isConfirmed) {
            this.store.dispatch(isLoadig());
            await this.afs.doc(`${this.user.uid}/moves/entry-exit/${uid}`).delete();
            Swal.fire(
                'Deleted!',
                'The item has been deleted',
                'success'
            );
            this.store.dispatch(stopLoading());
        }
    }
}
