import { createFeature, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Store } from './store.model';
import { StoreActions } from './store.actions';

export const storesFeatureKey = 'stores';

export interface State extends EntityState<Store> {
  // additional entities state properties
}

export const adapter: EntityAdapter<Store> = createEntityAdapter<Store>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
});

export const reducer = createReducer(
  initialState,
  on(StoreActions.addStore,
    (state, action) => adapter.addOne(action.store, state)
  ),
  on(StoreActions.upsertStore,
    (state, action) => adapter.upsertOne(action.store, state)
  ),
  on(StoreActions.addStores,
    (state, action) => adapter.addMany(action.stores, state)
  ),
  on(StoreActions.upsertStores,
    (state, action) => adapter.upsertMany(action.stores, state)
  ),
  on(StoreActions.updateStore,
    (state, action) => adapter.updateOne(action.store, state)
  ),
  on(StoreActions.updateStores,
    (state, action) => adapter.updateMany(action.stores, state)
  ),
  on(StoreActions.deleteStore,
    (state, action) => adapter.removeOne(action.id, state)
  ),
  on(StoreActions.deleteStores,
    (state, action) => adapter.removeMany(action.ids, state)
  ),
  on(StoreActions.loadStores,
    (state, action) => adapter.setAll(action.stores, state)
  ),
  on(StoreActions.clearStores,
    state => adapter.removeAll(state)
  ),
);

export const storesFeature = createFeature({
  name: storesFeatureKey,
  reducer,
  extraSelectors: ({ selectStoresState }) => ({
    ...adapter.getSelectors(selectStoresState)
  }),
});

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = storesFeature;
