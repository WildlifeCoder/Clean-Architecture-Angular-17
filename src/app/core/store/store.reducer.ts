import { createReducer, on } from '@ngrx/store';
import { User } from '@app/domain/models/user/user.model';
import { loadUsersSuccess } from './store.actions';

export const coreFeatureKey = 'core';

export interface CoreState {
  users: User[];
}



export const initialState: CoreState = {
  users: [],
};


export const reducer = createReducer(
  initialState,
  on(loadUsersSuccess, (state, action) => ({
    ...state,
    users: action.users,
  }))
);
