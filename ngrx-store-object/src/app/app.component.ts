import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { change, User } from './object.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  user$: Observable<User>;
  
  constructor(private colorStore: Store<{ user: User }>) {
    this.user$ = colorStore.select('user');
  }

  onSubmit(form: NgForm) {
    this.colorStore.dispatch(change({
      user: {
        firstName: form.value.firstName,
        lastName: form.value.lastName
      }
    }));
  }

}
