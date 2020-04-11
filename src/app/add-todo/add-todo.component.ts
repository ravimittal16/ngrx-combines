import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../states/todo';
import { ToDoItem } from '../models/todo.model';
import { CreateTodo } from '../states/todo/todo.actions';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss'],
})
export class AddTodoComponent implements OnInit {
  constructor(private _store: Store<AppState>) {}

  addTodoClicked(): void {
    const _id = 323 * Math.random();
    const todoItem: ToDoItem = {
      id: _id,
      title: 'Todo Item' + _id.toString(),
      isComplted: false,
      description: 'Another test',
    };
    //Common dispatch
    // this._store.dispatch({ type: 'create', payload: todoItem });
    //Strongly Typed Dispatch
    this._store.dispatch(new CreateTodo(todoItem));
  }

  ngOnInit(): void {}
}
