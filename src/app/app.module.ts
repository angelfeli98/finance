import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from './shared/shared.module';
import { EntryExitModule } from './entry-exit/entryExit.module';
import { AuthModule } from './auth/auth.module';
import { AppRoutesModule } from './app.routes.module';
import { appReducer } from './app.reducer';
import { FireBaseModule } from './fireBase.module';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    EntryExitModule,
    AuthModule,
    AppRoutesModule,
    FireBaseModule,
    StoreModule.forRoot(appReducer),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

