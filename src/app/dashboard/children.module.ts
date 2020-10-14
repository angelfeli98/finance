
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StadisticComponent } from '../entry-exit/stadistic/stadistic.component';
import { EntryExitComponent } from '../entry-exit/entry-exit.component';
import { DetailsComponent } from '../entry-exit/details/details.component';
import { AuthGuard } from '../guards/auth.guard';

const childRoutes: Routes = [
    { path: 'entry-exit', component: EntryExitComponent },
    { path: 'details', component: DetailsComponent },
    { path: '', pathMatch: 'full', component: StadisticComponent },
];

@NgModule({
    imports: [
        RouterModule.forChild(childRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class ChildModule{}
