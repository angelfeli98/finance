
import { NgModule } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PipeModule } from '../pipes/pipe.module';

@NgModule({
    declarations: [
        FooterComponent,
        NavbarComponent,
        SideBarComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        PipeModule
    ],
    exports: [
        FooterComponent,
        NavbarComponent,
        SideBarComponent
    ]
})
export class SharedModule{}
