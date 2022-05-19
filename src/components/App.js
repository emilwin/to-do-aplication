import React, { Component } from 'react';
import AddTask from './AddTask';
import TaskList from './TaskList';
import './App.css';

class App extends Component {
  counter = 9
  state = {
    tasks: [
      {
        id: 0,
        text: 'Opanować Reacta',
        date: '2022-10-31',
        important: true,
        active: true,
        finishDate: null
      },
      {
        id: 1,
        text: 'Opanować Gita',
        date: '2022-10-31',
        important: true,
        active: true,
        finishDate: null
      },
      {
        id: 2,
        text: 'Wymasterować Javascript',
        date: '2022-10-31',
        important: true,
        active: true,
        finishDate: null
      },
      {
        id: 3,
        text: 'Prawo jazdy na Motocykl',
        date: '2022-10-31',
        important: false,
        active: true,
        finishDate: null
      },
      
      {
        id: 4,
        text: 'Wbić Chalangera w Lolu',
        date: '2022-12-31',
        important: false,
        active: true,
        finishDate: null
      },
      {
        id: 5,
        text: '30 podciągnięć na drążku',
        date: '2022-10-31',
        important: false,
        active: true,
        finishDate: null
      },

    ]
  }

  deleteTask = (id) => {
    console.log("delete elementu o id " + id);
    // const tasks = [...this.state.tasks];
    // const index = tasks.findIndex(task => task.id === id);
    // tasks.splice(index, 1);
    // this.setState({
    //   tasks
    // })

    let tasks = [...this.state.tasks];
    tasks = tasks.filter(task => task.id !== id)
    this.setState({
      tasks
    })
  }

  changeTaskStatus = (id) => {
    console.log("change w stanie elementu o id " + id);
    const tasks = Array.from(this.state.tasks);
    tasks.forEach(task => {
      if (task.id === id) {
        task.active = false;
        task.finishDate = new Date().getTime()
      }
    })
    this.setState({
      tasks
    })
  }

  addTask = (text, date, important) => {
    // console.log("dodany obiekt");
    const task = {
      id: this.counter,
      text, // tekst z inputa
      date, //tekst z inputa
      important, //wartość z inputa
      active: true,
      finishDate: null
    }
    this.counter++
    console.log(task, this.counter);

    this.setState(prevState => ({
      tasks: [...prevState.tasks, task]
    }))


    return true
  }

  render() {
    return (
      <div className="App">
        <h1>Zadania do zrealizowania w 2022</h1>
        <AddTask add={this.addTask} />
        <TaskList tasks={this.state.tasks} delete={this.deleteTask} change={this.changeTaskStatus} />
      </div>
    );
  }
}

export default App;
