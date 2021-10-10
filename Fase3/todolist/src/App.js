import React from 'react';

import './App.css';
import Form from './componentes/formulario';
import TodoList from './componentes/TodoList';
import DeleteAll from './componentes/deleteAll';
import Header from './componentes/header';


class App extends React.Component {
    state = {
        id: new Date().getMilliseconds(),
        tareas: [['Tarea1', new Date().toLocaleString("en-US", { year: 'numeric', month: '2-digit', day: "2-digit" })],
        ['Tarea 2', new Date().toLocaleString("en-US", { year: 'numeric', month: '2-digit', day: "2-digit" })],
        ['Tarea 3', new Date().toLocaleString("en-US", { year: 'numeric', month: '2-digit', day: "2-digit" })]]
    };
    createTodo(todoContent) {
        this.setState({ tareas: [...this.state.tareas, todoContent] });
    };
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <Header total={this.state.tareas.length} ></Header>
                    <Form onSubmit={(value) => this.createTodo(value)} />
                    <DeleteAll />
                    <TodoList tareas={this.state.tareas} key={this.state.id} />
                </header >
            </div >
        );
    }
}

export default App;
