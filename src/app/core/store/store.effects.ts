import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { loadUsers, loadUsersFailure, loadUsersSuccess } from './store.actions';
import { UserAdapterService } from '../../infrastructure/driven-adapters/user-adapter/user-adapter.service';



@Injectable()
export class StoreEffects {
  constructor(
    private readonly _actions$: Actions,
    private readonly _userAdapter: UserAdapterService
  ) {}

  loadUsers$ = createEffect(() =>
    this._actions$.pipe(
      ofType(loadUsers),
      switchMap(() => {
        return this._userAdapter.getUsers().pipe(
          map((res) => {
            return loadUsersSuccess({ users: res });
          }),
          catchError((_error) => {
            return of(
              loadUsersFailure({
                error: 'Error loading user',
              })
            );
          })
        );
      })
    )
  );
}
