import { createAction, props } from '@ngrx/store';

export const loadUsers = createAction(
  '[Core] Load Users',
  props<{ menu: any }>()
);

export const loadUsersSuccess = createAction(
  '[Core] Load Users Success',
  props<{ users: any }>()
);

export const loadUsersFailure = createAction(
  '[Core] Load Users Failure',
  props<{ error: any }>()
);
