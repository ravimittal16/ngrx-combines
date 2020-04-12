import * as fromTodos from './todo.reducer';
import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';

//.4 Updated the shape of entire application state

export interface AppState {
  todos: fromTodos.TodoState;
}

// ==========================================================
//. Add in feature reducer info combined ActionReducerMap
// ==========================================================
export const reducers: ActionReducerMap<AppState> = {
  todos: fromTodos.todoReducer,
};

// ==========================================================
// exporting selectors
// ==========================================================
export const selectTodoState = createFeatureSelector<fromTodos.TodoState>(
  'todos'
);

export const selectTodoIds = createSelector(
  selectTodoState,
  fromTodos.selectTodoIds
);

export const selectTodoEntities = createSelector(
  selectTodoState,
  fromTodos.selectTodoEntities
);

export const selectAllTodos = createSelector(
  selectTodoState,
  fromTodos.selectAllTodos
);
