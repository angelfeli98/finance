
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { UserSignIn, UserSignUp } from '../interfaces/user.signUp';
import { UserModel } from '../model/user.model';

@Injectable({
    providedIn: 'root'
})
export class UserService{

    private usersCollection: AngularFirestoreCollection;

    constructor(
        private fireAuth: AngularFireAuth,
        private afs: AngularFirestore
    ){
    }

    public initAuthListener = (): void => {
        this.fireAuth.authState.subscribe( user => {
        });
    }

    public signUpUser = (data: UserSignUp): Promise<any> => {
        return this.fireAuth.createUserWithEmailAndPassword(data.email, data.password)
                    .then(  ({user}) =>
                        this.afs.collection(user.uid).doc('data').set(data)
                    );
    }

    public singInUser = (data: UserSignIn): Promise<firebase.firestore.DocumentData> =>
        this.fireAuth.signInWithEmailAndPassword(data.email, data.password)

    public signOutUser = (): Promise<void> =>
        this.fireAuth.signOut()
}
