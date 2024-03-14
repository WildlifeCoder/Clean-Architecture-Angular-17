import { createAction, createActionGroup, emptyProps, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { Store } from './store.model';



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

// export const StoreActions = createActionGroup({
//   source: 'Global Store',
//   events: {
//     'Load Users': props<{ stores: Store[] }>(),
//     'Add Users': props<{ store: Store }>(),
//     'Upsert User': props<{ store: Store }>(),
//     'Add Stores': props<{ stores: Store[] }>(),
//     'Upsert Stores': props<{ stores: Store[] }>(),
//     'Update Store': props<{ store: Update<Store> }>(),
//     'Update Stores': props<{ stores: Update<Store>[] }>(),
//     'Delete Store': props<{ id: string }>(),
//     'Delete Users': props<{ ids: string[] }>(),
//     'Clear Users': emptyProps(),
//   }
// });
