import { Action, createReducer } from '@ngrx/store';

export const initialState: string = 'Hello Store';
 
export const messageReducer = createReducer(
  initialState
);

