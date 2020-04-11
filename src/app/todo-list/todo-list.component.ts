import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { TodoState } from '../states/todo/todo.reducer';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators/';
import { ToDoItem } from '../models/todo.model';
import { AppState } from '../states/todo';
import { DeleteTodo } from '../states/todo/todo.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  todos$: Observable<ToDoItem[]>;
  constructor(private _store: Store<AppState>) {}
  deleteItemClicked(item: ToDoItem): void {
    this._store.dispatch(new DeleteTodo(item));
  }
  ngOnInit(): void {
    this.todos$ = this._store.pipe(
      select('todos'),
      map((todoState) => todoState.todos)
    );
  }
}
