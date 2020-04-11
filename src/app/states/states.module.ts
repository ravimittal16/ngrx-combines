import { NgModule } from '@angular/core';
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

    EffectsModule.forRoot([]),
    environment.production
      ? []
      : StoreDevtoolsModule.instrument({ maxAge: 10 }),
  ],
})
export class StatesModule {}
