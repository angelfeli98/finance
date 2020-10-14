
import { ActionReducerMap } from '@ngrx/store';
import { uiReducer, stateUi } from './shared/ui.reducer';
import { authReducer, authState } from './auth/auth.reducer';
import { EntryExitState, movesReducer } from './entry-exit/entry-exit.reducer';


// tslint:disable-next-line: class-name
export interface appState{
    ui: stateUi;
    auth: authState;
    // moves: EntryExitState;
}

export const appReducer: ActionReducerMap<appState> = {
    ui: uiReducer,
    auth: authReducer,
    // moves: movesReducer
};
