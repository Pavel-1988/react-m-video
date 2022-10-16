import React, { Component } from 'react'
import shortid from 'shortid';
// import Container from './components/Container/Container';
import initialTodos from './todosm2v2.json';
// import Form from './components/Form'
import TodoList from './components/TodoList/TodoList';
// import {ColorPicker} from './components/ColorPicker/ColorPicker'
import TodoEditor from './components/TodoEditor/TodoEditor'
import Filter from './components/Filter'


export class App extends Component { 
   state = {
    todos: initialTodos,
    filter: '',
  };

    addTodo = text => {
      const todo = {
        id: shortid.generate(),
        text,
        completed: false,
      }

      this.setState(({todos}) => ({
        todos:[todo,...todos]
      }))
  };
  
  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  toggleCompleted = todoId => {
    // this.setState(prevState => ({
    //   todos: prevState.todos.map(todo => {
    //     if (todo.id === todoId) {
    //       console.log('Еашли тот туду которій нужно');
    //       return {
    //         ...todo,
    //         completed: !todo.completed,
    //       };
    //     }

    //     return todo;
    //   }),
    // }));
    this.setState(({ todos }) => ({
      todos: todos.map(todo =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo,
      ),
    }));
  };

  changeFilter = e => {
    this.setState({filter: e.currentTarget.value});
  };

  getVisibleTodos = () => {
      const { filter, todos } = this.state;
      const normalizedFilter = filter.toLowerCase();

      return todos.filter(todo =>
        todo.text.toLowerCase().includes(normalizedFilter),
      );
  };

  calculateCompletedTodos = () => {
    const { todos } = this.state;
    return todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0,
    );
  };

  render() {

    const { todos, filter } = this.state;
    const totalTodoCount = todos.length;
    const completedTodoCount = this.calculateCompletedTodos

    const visibleTodos =this.getVisibleTodos()

    return (
      <>
        {/* < Form onSub={this.formSubmitHandler} /> */}

          <div>
            <p>Всего заметок: {totalTodoCount}</p>
            <p>Выполнено: {completedTodoCount}</p>
        </div>
        <TodoEditor onSubmi={this.addTodo} />

        <Filter value={filter} onChange={this.changeFilter} />
        <TodoList
          todos={visibleTodos}
          onDeleteTodo={this.deleteTodo}
          onToggleCompleted={this.toggleCompleted}
        />
      </>
    )
    
  }

}

export default App