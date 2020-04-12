//Stronlgly Typed Action

import { Action } from '@ngrx/store';
import { ToDoItem } from 'src/app/models/todo.model';

export enum ToDoActionTypes {
  TodoSelect = '[ToDo] Selected',
  LoadTodos = '[ToDo] Load',
  TodosLoades = '[ToDo] Loaded',
  CreateTodo = '[Todo] Create',
  TodoCreated = '[Todo] Created',
  DeleteTodo = '[Todo] Delete',
  UpdateTodo = '[Todo] Update',
}

export class SelectTodos implements Action {
  readonly type = ToDoActionTypes.TodoSelect;
  constructor(private payload: ToDoItem) {}
}

export class LoadTodos implements Action {
  readonly type = ToDoActionTypes.LoadTodos;
  constructor(private payload: ToDoItem[]) {}
}

export class DeleteTodo implements Action {
  readonly type = ToDoActionTypes.DeleteTodo;
  constructor(private payload: number) {}
}

export class CreateTodo implements Action {
  readonly type = ToDoActionTypes.CreateTodo;
  constructor(private payload: ToDoItem) {}
}

export class UpdateTodo implements Action {
  readonly type = ToDoActionTypes.UpdateTodo;
  constructor(private payload: ToDoItem) {}
}

export type TodoActions =
  | SelectTodos
  | LoadTodos
  | CreateTodo
  | DeleteTodo
  | UpdateTodo;
