import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from '../object.reducer';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  user$: Observable<User>;
  
  constructor(private colorStore: Store<{ user: User }>) {
    this.user$ = colorStore.select('user');
  }

}
