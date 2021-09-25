import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { messageSelector, uppercaseSelector } from './app.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  stringSelector$: Observable<string>;
  mapFnSelector$: Observable<string>;
  fnSelector$: Observable<string>;
  createSelectorSelector$: Observable<string>;
  
  constructor(private stringStore: Store<{ message: string }>,
              private mapFnStore: Store<{ message: string }>,
              private fnSelectorStore: Store<{ message: string }>,
              private createSelectorStore: Store<{ message: string }>) {
    this.stringSelector$ = stringStore.select('message');
    this.mapFnSelector$ = mapFnStore.select((state) => state.message);
    this.fnSelector$ = fnSelectorStore.select(messageSelector);
    this.createSelectorSelector$ = createSelectorStore.select(uppercaseSelector);
  }
}
