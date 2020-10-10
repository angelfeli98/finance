
import { createReducer, on, Action } from '@ngrx/store';
import { isLoadig, stopLoading } from './ui.actions';

// tslint:disable-next-line: no-empty-interface
// tslint:disable-next-line: class-name
export interface stateUi{
    isLoading: boolean;
}

const initState: stateUi = {
    isLoading: false
};

// tslint:disable-next-line: variable-name
const _uiReducer = createReducer(
    initState,
    on(isLoadig, state => ({...state, isLoading: true})),
    on(stopLoading, state => ({...state, isLoading: false}))
);

export const uiReducer = (state: stateUi, action: Action) => _uiReducer(state, action);
