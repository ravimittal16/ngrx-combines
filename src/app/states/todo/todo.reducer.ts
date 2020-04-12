import { ToDoItem } from 'src/app/models/todo.model';
import { ToDoActionTypes } from './todo.actions';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

export const dummyTodos: ToDoItem[] = [
  { ie: 1, completed: false, title: 'Work Order', description: 'Hello World' },
];

//1. Declare a state
///=================================================
// export interface TodoState {
//   todos: ToDoItem[];
//   selectedTodoId: number | null;
// }
///=================================================

// ==========================================================
// creating the state with @ngrx/entity
// define a default Todo State with custom property
export interface TodoState extends EntityState<ToDoItem> {
  selectedTodoId: number | null; // custom property
}
// ==========================================================

// Create entity adapter
export const adapter: EntityAdapter<ToDoItem> = createEntityAdapter<ToDoItem>();
export const initialTodoState: TodoState = adapter.getInitialState({
  selectedTodoId: null,
});
///=================================================

//2. Declare a initial State Object
// export const initialToDoState: TodoState = {
//   todos: dummyTodos,
//   selectedTodoId: null,
// };

//03 simple reducer

const createTodo = (todos: ToDoItem[], newTodo: ToDoItem) => [
  ...todos,
  newTodo,
];

const updateTodo = (todos: ToDoItem[], todo: ToDoItem) =>
  todos.map((x) => {
    return x.ie === todo.ie ? Object.assign({}, todo) : todo;
  });

const deleteToDo = (todos: ToDoItem[], todo: ToDoItem) =>
  todos.filter((x) => x.ie !== todo.ie);

//reducer will have everything about your state
export function todoReducer(state = initialTodoState, action): TodoState {
  switch (action.type) {
    case ToDoActionTypes.TodoCreated:
      return adapter.addOne(action.payload, state);
    case ToDoActionTypes.TodosLoaded:
      console.log('HELLLLLL');
      return adapter.addMany(action.payload, state);
    case ToDoActionTypes.UpdateTodo:
      return adapter.updateOne(action.payload, state);
    case ToDoActionTypes.DeleteTodo:
      return adapter.removeOne(action.payload, state);
    default:
      return state;
  }
}
// ==========================================================
// Working with Selectors
// ==========================================================
export const getSelectedTodoId = (state: TodoState) => state.selectedTodoId;

const { selectIds, selectEntities, selectAll } = adapter.getSelectors();

export const selectTodoIds = selectIds;
export const selectTodoEntities = selectEntities;
export const selectAllTodos = selectAll;

// ==========================================================
// this will handle the nameing convention
// ==========================================================
