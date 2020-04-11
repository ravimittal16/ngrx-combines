import { ToDoItem } from 'src/app/models/todo.model';
import { ToDoActionTypes } from './todo.actions';

//1. Declare a state
export interface TodoState {
  todos: ToDoItem[];
  selectedTodoId: number | null;
}

const dummyTodos: ToDoItem[] = [
  { id: 1, isComplted: false, title: 'Work Order', description: 'Hello World' },
];

//2. Declare a initial State Object
export const initialToDoState: TodoState = {
  todos: dummyTodos,
  selectedTodoId: null,
};

//03 simple reducer

const createTodo = (todos: ToDoItem[], newTodo: ToDoItem) => [
  ...todos,
  newTodo,
];

const updateTodo = (todos: ToDoItem[], todo: ToDoItem) =>
  todos.map((x) => {
    return x.id === todo.id ? Object.assign({}, todo) : todo;
  });

const deleteToDo = (todos: ToDoItem[], todo: ToDoItem) =>
  todos.filter((x) => x.id !== todo.id);

//reducer will have everything about your state
export function todoReducer(state = initialToDoState, action): TodoState {
  switch (action.type) {
    case ToDoActionTypes.CreateTodo: // 'create': //action
      return {
        selectedTodoId: state.selectedTodoId,
        todos: createTodo(state.todos, action.payload),
      };
    case ToDoActionTypes.UpdateTodo:
      return {
        selectedTodoId: state.selectedTodoId,
        todos: updateTodo(state.todos, action.payload),
      };
    case ToDoActionTypes.DeleteTodo:
      return {
        selectedTodoId: state.selectedTodoId,
        todos: deleteToDo(state.todos, action.payload),
      };
    default:
      return state;
  }
}
