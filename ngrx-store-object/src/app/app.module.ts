import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';

import { userReducer } from './object.reducer';
import { FormsModule } from '@angular/forms';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({
      user: userReducer
    }, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
