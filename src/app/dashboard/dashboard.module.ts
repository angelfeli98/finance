
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { StadisticComponent } from '../entry-exit/stadistic/stadistic.component';
import { EntryExitComponent } from '../entry-exit/entry-exit.component';
import { DetailsComponent } from '../entry-exit/details/details.component';
import { NgModule } from '@angular/core';

export const DASHBOARDROUTES: Routes = [
    {
        path: '',
        component: DashboardComponent,
        children: [
            { path: '', component: StadisticComponent },
            { path: 'entry-exit', component: EntryExitComponent },
            { path: 'details', component: DetailsComponent }
        ]
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

