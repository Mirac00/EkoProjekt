import React, { useEffect, useState } from 'react';
import { getToDos } from '../../services/todosService';
import { ToDo } from '../../models/ToDo';
import 'bootstrap/dist/css/bootstrap.min.css';

interface ToDosProps {
  userId: number;
}

const ToDos: React.FC<ToDosProps> = ({ userId }) => {
  let [todos, setToDos] = useState<ToDo[]>([]);

  useEffect(() => {
    let fetchToDos = async () => {
      let todos = await getToDos();
      setToDos(todos.filter(todo => todo.userId === userId));
    };

    fetchToDos();
  }, [userId]);

  return (
    <div>
      {todos.map((todo: ToDo) => (
        <div key={todo.id} className="card mt-3 border border-dark rounded">
          <div className={`card-body ${todo.completed ? 'bg-success' : 'bg-light'}`}>
            <h3 className="card-title">{todo.title}</h3>
            <p className="card-text"><strong>{todo.completed ? 'Completed' : 'Not Completed'}</strong></p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ToDos;
