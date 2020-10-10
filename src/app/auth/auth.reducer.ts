
import { createReducer, Action, on } from '@ngrx/store';
import { setUser, unsetUser } from './auth.action';

import { UserModel } from '../model/user.model';

// tslint:disable-next-line: class-name
export interface authState{
    user: UserModel;
}

const intiState: authState = {
    user: null
};

// tslint:disable-next-line: variable-name
const _userReducer = createReducer(
    intiState,
    on(setUser, (state, {user}) => ({...state, user: {...user}})),
    on(unsetUser, state => null)
);

export const authReducer = (state: any, action: Action) => _userReducer(state, action);