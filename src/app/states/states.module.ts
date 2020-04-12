import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../environments/environment';
import { CommonModule } from '@angular/common';
import { reducers } from './todo';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot(reducers),
    HttpClientModule,
    EffectsModule.forRoot([]),
    environment.production
      ? []
      : StoreDevtoolsModule.instrument({ maxAge: 10 }),
  ],
})
export class StatesModule {}
