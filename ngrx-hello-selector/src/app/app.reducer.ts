import { Action, createReducer, createSelector, on, props } from '@ngrx/store';

const initialState = 'Hello world';

const _messageReducer = createReducer(
  initialState
);

export function messageReducer(state: string = initialState, action: Action) {
  return _messageReducer(state, action);
}

export const messageSelector = (state: { message: string }) => state.message;

export const uppercaseSelector = createSelector(messageSelector, (message: string) => message.toUpperCase());
