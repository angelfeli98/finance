
import { createReducer, on, Action } from '@ngrx/store';
import { Move } from '../interfaces/moves.interface';
import { setMoves, unsetMoves } from './entry-exit.actions';

// tslint:disable-next-line: no-empty-interface
export interface EntryExitState{
    moves: Move[];
}

const initSate: EntryExitState = {
    moves: []
};

// tslint:disable-next-line: variable-name
const _movesReducer = createReducer(
    initSate,
    on(setMoves, (state, {moves}) => ({...state, moves: [...moves]})),
    on(unsetMoves, state => ({...state, moves: []}))
);

export const  movesReducer = (state: EntryExitState, action: Action): EntryExitState =>
                    _movesReducer(state, action);
