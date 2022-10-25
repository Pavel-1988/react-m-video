import React from 'react'
// import classNames from 'classnames';
import './TodoList.css'
import {Todo} from '../Todo/Todo'



const TodoList = ({ todos, onDeleteTodo, onToggleCompleted }) => (
  <ul className="TodoList">
    {todos.map(({ id, text, completed }) => (
      <li
        key={id}
        className='TodoList__item'
      >
        <Todo
          text={text}
          completed={completed}
          onToggleCompleted={() => onToggleCompleted(id)}
          onDeleteTodo={() => onDeleteTodo(id)}
        />
        
      </li>
    ))}
  </ul>
);
  
  

export default TodoList

