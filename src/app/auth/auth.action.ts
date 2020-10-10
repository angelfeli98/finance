
import { createAction, props } from '@ngrx/store';
import { UserModel } from '../model/user.model';

const setUser = createAction('[Auth] setUser', props<{user: UserModel}>());

const unsetUser = createAction('[Auth unsetUser');

export {
    setUser,
    unsetUser
};
