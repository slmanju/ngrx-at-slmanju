import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { timer } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';

import { add, addUrl } from './app.reducer';

@Injectable()
export class HttpUrlEffects {
  constructor(private store: Store, private actions$: Actions) {}

  readonly multiplyBy = createEffect(() => 
    this.actions$.pipe(
      ofType(add),
      mergeMap((action) => timer(100).pipe(map(() => addUrl({ code: action.code, url: 'https://http.cat/' + action.code }))))
    ));
}
