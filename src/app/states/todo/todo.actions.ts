//Stronlgly Typed Action

import { Action } from '@ngrx/store';
import { ToDoItem } from 'src/app/models/todo.model';

export enum ToDoActionTypes {
  TodoSelect = '[ToDo] Selected',
  LoadTodos = '[ToDo] Load',
  TodosLoaded = '[ToDo] Loaded',
  CreateTodo = '[Todo] Create',
  TodoCreated = '[Todo] Created',
  DeleteTodo = '[Todo] Delete',
  UpdateTodo = '[Todo] Update',
}

export class SelectTodos implements Action {
  readonly type = ToDoActionTypes.TodoSelect;
  constructor(public payload: ToDoItem) {}
}

export class LoadTodos implements Action {
  readonly type = ToDoActionTypes.LoadTodos;
}

export class TodosLoaded implements Action {
  readonly type = ToDoActionTypes.TodosLoaded;
  constructor(public payload: ToDoItem[]) {}
}

export class DeleteTodo implements Action {
  readonly type = ToDoActionTypes.DeleteTodo;
  constructor(public payload: number) {}
}

export class CreateTodo implements Action {
  readonly type = ToDoActionTypes.CreateTodo;
  constructor(public payload: ToDoItem) {}
}

export class TodoCreated implements Action {
  readonly type = ToDoActionTypes.TodoCreated;
  constructor(public payload: ToDoItem) {}
}

export class UpdateTodo implements Action {
  readonly type = ToDoActionTypes.UpdateTodo;
  constructor(public payload: ToDoItem) {}
}

export type TodoActions =
  | SelectTodos
  | LoadTodos
  | TodosLoaded
  | CreateTodo
  | TodoCreated
  | DeleteTodo
  | UpdateTodo;
