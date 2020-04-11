import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { StatesModule } from './states/states.module';
import { AddTodoComponent } from './add-todo/add-todo.component';

@NgModule({
  declarations: [AppComponent, TodoListComponent, AddTodoComponent],
  imports: [BrowserModule, AppRoutingModule, StatesModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
