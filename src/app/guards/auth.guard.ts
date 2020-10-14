
import { Injectable, ɵConsole } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { AngularFireAuthGuard } from '@angular/fire/auth-guard';
import { State, Store } from '@ngrx/store';
import { appState } from '../app.reducer';
import { map, first } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanLoad, CanActivate {
    constructor(
        private route: Router,
        private fireAuth: AngularFireAuth
    ){ }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        return this.fireAuth.authState.pipe(first(), map(user => {
            if (!!!user){
                this.route.navigateByUrl('login');
            }
            return user !== null;
        }));
    }

    canLoad(route: Route): Promise<boolean> | Observable<boolean> | boolean {
        return this.fireAuth.authState.pipe(first(), map(user => {
            if (!!!user){
                this.route.navigateByUrl('login');
            }
            return user !== null;
        }));
    }
}

