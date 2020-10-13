
import { createAction, props } from '@ngrx/store';
import { Move } from '../interfaces/moves.interface';

const setMoves = createAction('[Move] addMove', props<{moves: Move[]}>());
const unsetMoves = createAction('[Move] unsetMove');

export {
    setMoves,
    unsetMoves
};
