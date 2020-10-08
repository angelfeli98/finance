
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DASHBOARDROUTES, DashboardChildrenModule } from './dashboard/dashboard.module';

const APPROUTES: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: '**', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(APPROUTES),
        DashboardChildrenModule
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutesModule{}
