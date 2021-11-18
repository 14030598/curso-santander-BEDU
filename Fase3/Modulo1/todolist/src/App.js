import React from 'react';

import './App.css';
import Form from './componentes/formulario';
import TodoList from './componentes/ToDoList';
import DeleteAll from './componentes/deleteAll';
import Header from './componentes/Header';
const hoy = new Date().toLocaleString("en-US", { year: 'numeric', month: '2-digit', day: "2-digit" });

class App extends React.Component {
    state = {
        tareas: [{ descripcion: 'Tarea 1', fecha: hoy, done: false },
        { descripcion: 'Tarea 2', fecha: hoy, done: false }]
    };
    createToDo(nuevaTarea) {
        this.setState({ tareas: [...this.state.tareas, nuevaTarea] });
    };
    updateToDo(nuevosDatos, index) {
        const copia = [...this.state.tareas];
        copia[index] = nuevosDatos;
        this.setState({ tareas: copia });
    }
    deleteToDo(index) {
        const copia = this.state.tareas;

        const filtrado = copia.filter((tarea, i) => {
            if (i !== index) {
                return tarea;
            }
        });

        this.setState({ tareas: filtrado });
    }
    deleteAll() {
        this.setState({ tareas: [] });
    }
    cleanDone() {
        const pendientes = this.state.tareas.filter((tarea) => !tarea.done);
        this.setState({ tareas: pendientes });
    }
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <Header total={this.state.tareas.length} done={this.state.tareas.filter((hechas) => hechas.done).length} pending={this.state.tareas.filter((hechas) => !hechas.done).length} ></Header>
                    <Form onSubmit={(nuevaTarea) => this.createToDo(nuevaTarea)} />
                    <DeleteAll onDelete={() => this.deleteAll()} onClean={() => this.cleanDone()} />
                    <TodoList tareas={this.state.tareas} setTareas={(tareaActualizada, index) => this.updateToDo(tareaActualizada, index)} onDelete={index => this.deleteToDo(index)} />
                </header >
            </div >
        );
    }
}

export default App;
