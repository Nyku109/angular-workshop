import {
  ActionReducerMap,
  ActionReducer,
  MetaReducer,
} from '@ngrx/store';
import { environment } from '../../environments/environment';

import { storeFreeze } from 'ngrx-store-freeze';

import * as fromBooks from '../../modules/books/reducers/books.reducer';

export interface State {
  movies: fromBooks.State;
}

export const reducers: ActionReducerMap<State> = {
  movies: fromBooks.reducer
};

export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
  return function(state: State, action: any): State {

    console.log('state', state);
    console.log('action', action);

    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? [logger, storeFreeze]
  : [];
