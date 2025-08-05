import { User } from '@app/domain/models/user/user.model';
import { createAction, props } from '@ngrx/store';

export const loadUsers = createAction(
  '[Core] Load Users',
);

export const loadUsersSuccess = createAction(
  '[Core] Load Users Success',
  props<{ users: User[] }>()
);

export const loadUsersFailure = createAction(
  '[Core] Load Users Failure',
  props<{ error: any }>()
);
