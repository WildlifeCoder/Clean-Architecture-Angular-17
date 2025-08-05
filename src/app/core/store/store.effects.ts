import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { loadUsers, loadUsersFailure, loadUsersSuccess } from './store.actions';
import { UserAdapterService } from '@app/infrastructure/driven-adapters/user-adapter/user-adapter.service';


@Injectable()
export class StoreEffects {
  constructor(
    private readonly _actions$: Actions,
    private readonly _userAdapter: UserAdapterService
  ) {}

  loadUsers$: Observable<any> = createEffect(() =>
    this._actions$.pipe(
      ofType(loadUsers),
      switchMap(() => {
        return this._userAdapter.getUsers().pipe(
          map((res) => {
            return loadUsersSuccess({ users: res });
          }),
          catchError((error) => {
            console.log(error);
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

  // loadStores$ = createEffect(() => {
  //   return this.actions$.pipe(

  //     ofType(StoreActions.loadStores),
  //     concatMap(() =>
  //       /** An EMPTY observable only emits completion. Replace with your own observable API request */
  //       EMPTY.pipe(
  //         map(data => StoreActions.loadStoresSuccess({ data })),
  //         catchError(error => of(StoreActions.loadStoresFailure({ error }))))
  //     )
  //   );
  // });
}
