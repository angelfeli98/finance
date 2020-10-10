
import { createAction } from '@ngrx/store';

const isLoadig = createAction('UI loading');
const stopLoading = createAction('UI stopLoading');

export {
    isLoadig,
    stopLoading
}