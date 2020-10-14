
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { NgModule } from '@angular/core';

import { AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { AuthGuard } from '../guards/auth.guard';

const redirectUnauthorizedLogin = () => redirectUnauthorizedTo(['/login']);

export const DASHBOARDROUTES: Routes = [
    {
        path: '',
        component: DashboardComponent,
        canLoad: [ AuthGuard ],
        canActivate: [ AuthGuard ],
        loadChildren: (): Promise<any> => import('./children.module').then(module => module.ChildModule),
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(DASHBOARDROUTES)
    ],
    exports: [
        RouterModule
    ]
})
export class DashboardChildrenModule{}

