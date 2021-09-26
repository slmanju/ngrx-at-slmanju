import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { add, AppState, HttpState, remove, selectCodes } from './app.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  code$: Observable<HttpState[]>;
  statusCode: number;
  
  constructor(private httpStatusStore: Store<AppState>) {
    this.code$ = httpStatusStore.select(selectCodes);
  }

  onAdd() {
    this.httpStatusStore.dispatch(add({ code: this.statusCode }));
  }

  onRemove() {
    this.httpStatusStore.dispatch(remove({
      code: this.statusCode,
      url: ''
    }));
  }

}
