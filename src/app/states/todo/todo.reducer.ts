import { ToDoItem } from 'src/app/models/todo.model';

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

export function todoReducer(state = initialToDoState, action): TodoState {
  switch (action.type) {
    default:
      return state;
  }
}
