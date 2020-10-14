import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { EntryExitComponent } from '../entry-exit/entry-exit.component';
import { StoreModule } from '@ngrx/store';
import { movesReducer } from '../entry-exit/entry-exit.reducer';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { PipeModule } from '../pipes/pipe.module';
import { ChartsModule } from 'ng2-charts';

@NgModule({
    declarations: [
        DashboardComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        RouterModule,
        ReactiveFormsModule,
        PipeModule,
        ChartsModule,
    ],
    exports: [
        DashboardComponent
    ]
})
export class DashBoardModuel{}
