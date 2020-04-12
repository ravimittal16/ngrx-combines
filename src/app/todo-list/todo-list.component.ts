import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import {
  TodoState,
  initialTodoState,
  dummyTodos,
} from '../states/todo/todo.reducer';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators/';
import { ToDoItem } from '../models/todo.model';
import { AppState, selectAllTodos } from '../states/todo';
import { DeleteTodo, LoadTodos } from '../states/todo/todo.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  todos$: Observable<ToDoItem[]>;
  constructor(private _store: Store<AppState>) {}
  deleteItemClicked(item: ToDoItem): void {
    this._store.dispatch(new DeleteTodo(item.id));
  }

  loadTodos(): void {
    this._store.dispatch(new LoadTodos(dummyTodos));
  }
  // selection of data will be change using entity, and this will be set the stage for selectors
  ngOnInit(): void {
    this.loadTodos();
    this.todos$ = this._store.pipe(select(selectAllTodos));
  }
}
