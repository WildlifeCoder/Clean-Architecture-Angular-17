import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, switchMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import { loadUsers, loadUsersFailure, loadUsersSuccess } from './store.actions';
import { UserAdapterService } from '@app/infrastructure/driven-adapters/user-adapter/user-adapter.service';
// import { StoreActions } from './store.actions';


@Injectable()
export class StoreEffects {

  constructor(private actions$: Actions, private userAdapter: UserAdapterService) {}

  loadUsers$: Observable<any> = createEffect(() =>
  this.actions$.pipe(
    ofType(loadUsers),
    switchMap(() => {
      return this.userAdapter.getUsers().pipe(
        map((res) => {
          return loadUsersSuccess({ users: res });
        }),
        catchError((error) => {
          console.log(error)
          return of(
            loadUsersFailure({
              error: 'Error loading dynamic menu',
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
