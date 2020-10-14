import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntryExitComponent } from './entry-exit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DetailsComponent } from './details/details.component';
import { PipeModule } from '../pipes/pipe.module';
import { StadisticComponent } from './stadistic/stadistic.component';

import { ChartsModule } from 'ng2-charts';
import { StoreModule } from '@ngrx/store';
import { movesReducer } from './entry-exit.reducer';

@NgModule({
    declarations: [
        EntryExitComponent,
        DetailsComponent,
        StadisticComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        PipeModule,
        ChartsModule,
        StoreModule.forFeature('moves', movesReducer),
    ],
    exports: [
        EntryExitComponent,
        DetailsComponent,
        StadisticComponent
    ]
})
export class EntryExitModule{}
