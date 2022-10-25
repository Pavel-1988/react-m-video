import React, { Component } from 'react'
import shortid from 'shortid';
// import Container from './components/Container/Container';
// import initialTodos from './todosm2v2.json';
// import Form from './components/Form'
import TodoList from './components/TodoList/TodoList';
// import {ColorPicker} from './components/ColorPicker/ColorPicker'
import TodoEditor from './components/TodoEditor/TodoEditor'
import Filter from './components/Filter'

import Modal from './components/Modal/Modal'

// import Tabs from './components/Tabs/Tabs';
// import tabs from './tabs.json';


export class App extends Component { 
  state = {
    todos: [],
    filter: '',
    showModal: false,
  };

   componentDidMount() {
    // console.log('App  componentDidMount !!!!!!')

    const todos = localStorage.getItem('todos')
    const parsedTodos = JSON.parse(todos);

    if (parsedTodos) {
       this.setState({todos:parsedTodos})
    }
   
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.todos !== prevState.todos) {
      localStorage.setItem('todos', JSON.stringify(this.state.todos))
    }
  }

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

   toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  }

  render() {
    const { todos, filter, showModal } = this.state;
    const totalTodoCount = todos.length;
    const completedTodoCount = this.calculateCompletedTodos
    const visibleTodos =this.getVisibleTodos()

    return (
      <>
        {/* <Tabs items={tabs } /> */}
        <button type='button' onClick={this.toggleModal}> Открыть модалку</button>
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <h1> Привет это контектн модалки</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quam enim accusamus labore soluta libero eius veniam deleniti sed rerum.</p>
            <button type='button' onClick={this.toggleModal}> Закрыть модалку</button>
          </Modal>)}
     
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




  