import { Action, createAction, createReducer, createSelector, on, props } from '@ngrx/store';

export interface HttpState {
  code: number,
  url: string
};

export interface AppState {
  statusCodes: HttpState[]
};

const initialState: HttpState[] = [];

// ACTIONS
export const add = createAction('[Http Status] Add', props<{ code : number}>());
export const remove = createAction('[Http Status] Remove', props<HttpState>());
export const addUrl = createAction('[Http Status] Add Url', props<HttpState>());

const _statusCodeReducer = createReducer(
  initialState,
 // on(add, (state, action) => [...state, { code: action.code, url: action.url }]),
  on(remove, (state, action) => state.filter(http => http.code !== action.code)),
  on(addUrl, (state, action) => [...state, { code: action.code, url: action.url }])
);

export function statusCodeReducer(state: HttpState[] = initialState, action: Action) {
  return _statusCodeReducer(state, action);
}

export const selectCodes = (state: AppState) => state.statusCodes;
