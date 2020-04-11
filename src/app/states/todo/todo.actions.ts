//Stronlgly Typed Action

import { Action } from '@ngrx/store';
import { ToDoItem } from 'src/app/models/todo.model';

export enum ToDoActionTypes {
  TodoSelect = '[ToDo] Selected',
  CreateTodo = '[Todo] Create',
  DeleteTodo = '[Todo] Delete',
  UpdateTodo = '[Todo] Update',
}

export class SelectTodos implements Action {
  readonly type = ToDoActionTypes.TodoSelect;
  constructor(private payload: ToDoItem) {}
}

export class DeleteTodo implements Action {
  readonly type = ToDoActionTypes.DeleteTodo;
  constructor(private payload: ToDoItem) {}
}

export class CreateTodo implements Action {
  readonly type = ToDoActionTypes.CreateTodo;
  constructor(private payload: ToDoItem) {}
}

export class UpdateTodo implements Action {
  readonly type = ToDoActionTypes.UpdateTodo;
  constructor(private payload: ToDoItem) {}
}

export type TodoActions = SelectTodos | CreateTodo | DeleteTodo | UpdateTodo;
