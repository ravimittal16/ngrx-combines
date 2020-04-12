import { Injectable } from '@angular/core';

import { TodoState, dummyTodos } from './todo.reducer';
import { DataPersistence } from '@nrwl/nx';
import { Effect, Actions } from '@ngrx/effects';
import {
  ToDoActionTypes,
  CreateTodo,
  TodosLoaded,
  LoadTodos,
  TodoCreated,
} from './todo.actions';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ToDoItem } from 'src/app/models/todo.model';
// ==========================================================
// this will contains all data effcts for Todos
// ==========================================================
@Injectable({ providedIn: 'root' })
export class TodosEffects {
  // ==========================================================
  // @Effect defination
  // ==========================================================
  @Effect()
  loadTodos$ = this.dataPersistence.fetch(ToDoActionTypes.LoadTodos, {
    run: (action: LoadTodos, state: TodoState) => {
      return this.httpClient
        .get('http://jsonplaceholder.typicode.com/todos', {
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        })
        .pipe(map((res: ToDoItem[]) => new TodosLoaded(res)));

      //return new TodosLoaded(dummyTodos);
    },
    onError: () => {},
  });

  @Effect()
  addTodo$ = this.dataPersistence.pessimisticUpdate(
    ToDoActionTypes.CreateTodo,
    {
      run: (action: CreateTodo, state: TodoState) => {
        /// async call
        new TodoCreated(action.payload);
      },
      onError: () => {
        console.log('error while making a network call.');
      },
    }
  );
  // ==========================================================
  // NOTE : data service could be injected here to perform any async callback
  // ==========================================================

  constructor(
    private actions$: Actions,
    private httpClient: HttpClient,
    private dataPersistence: DataPersistence<TodoState>
  ) {}
}
