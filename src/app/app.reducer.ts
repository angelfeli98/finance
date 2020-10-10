
import { ActionReducerMap } from '@ngrx/store';
import { uiReducer, stateUi } from './shared/ui.reducer';
import { authReducer, authState } from './auth/auth.reducer';


// tslint:disable-next-line: class-name
export interface appState{
    ui: stateUi;
    auth: authState;
}

export const appReducer: ActionReducerMap<appState> = {
    ui: uiReducer,
    auth: authReducer
};
