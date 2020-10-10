
import { Injectable } from '@angular/core';
import { State, Store } from '@ngrx/store';
import { UserSignIn, UserSignUp } from '../interfaces/user.signUp';
import { UserModel } from '../model/user.model';
import { appState } from '../app.reducer';
import { setUser, unsetUser } from '../auth/auth.action';
import { first } from 'rxjs/operators';

import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
@Injectable({
    providedIn: 'root'
})
export class UserService{

    private usersCollection: AngularFirestoreCollection;

    constructor(
        private fireAuth: AngularFireAuth,
        private afs: AngularFirestore,
        private store: Store<appState>
    ){
    }

    private setUser = (userFb: firebase.User): void => {
        this.afs.doc(`${userFb.uid}/data`).valueChanges().pipe(first()).subscribe(
            (data: UserModel) => this.store.dispatch(setUser({user: {...data}}))
        );
    }

    public initAuthListener = (): void => {
        this.fireAuth.authState.subscribe( (userFb) => {
            if (userFb){
                this.setUser(userFb);
            }
        });
    }

    public signUpUser = (data: UserSignUp): Promise<any> => {
        return this.fireAuth.createUserWithEmailAndPassword(data.email, data.password)
                    .then(  ({user}) =>
                        this.afs.collection(user.uid).doc('data').set(data)
                    );
    }

    public singInUser = async (data: UserSignIn): Promise<void> => {
        try {
            const {user} = await this.fireAuth.signInWithEmailAndPassword(data.email, data.password);
            this.setUser(user);
        } catch (error) {
            throw new Error('ERROR');
        }
    }

    public signOutUser = (): void => {
        this.fireAuth.signOut();
        this.store.dispatch(unsetUser());
    }
}
