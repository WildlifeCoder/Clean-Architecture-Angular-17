import { createFeatureSelector } from '@ngrx/store';
import { coreFeatureKey, CoreState } from './store.reducer';


export const selectCoreState = createFeatureSelector<CoreState>(coreFeatureKey);

export const selectUsers = (state: CoreState) => state.users;
