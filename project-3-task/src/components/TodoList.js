import React from 'react'
import { Todo  } from './Todo';

export const TodoList = ({todos, setTodos, filteredTodos}) => {

  return (
    <div className='todo-container'>
        <ul className='todo-list'>
            {filteredTodos.map((todo) => (
                <Todo 
                todos = {todos} 
                setTodos = {setTodos} 
                todo = {todo}
                key={todo.id} 
                text={todo.text}
                />

            ))}
        </ul>
    </div>
  );
};

export default TodoList;

