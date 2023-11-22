import { ToDo } from '../models/ToDo';

export const getToDos = async (): Promise<ToDo[]> => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos');
  const todos = await response.json();
  return todos;
};