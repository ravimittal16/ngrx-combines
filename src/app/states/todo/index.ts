import * as fromTodos from './todo.reducer';
import { ActionReducerMap } from '@ngrx/store';

//.4 Updated the shape of entire application state

export interface AppState {
  todos: fromTodos.TodoState;
}

//. Add in feature reducer info combined ActionReducerMap
export const reducers: ActionReducerMap<AppState> = {
  todos: fromTodos.todoReducer,
};
