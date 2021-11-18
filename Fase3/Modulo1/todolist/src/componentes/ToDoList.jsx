import React from 'react';
import Todo from './ToDo.jsx';
import "./css/todolist.css";

class TodoList extends React.Component {
    state = {
        estado: false,
        datos: this.props.tareas
    };

    render() {
        return (
            <section className="lista-tareas" >
                <section className="tareas">
                    {
                        this.props.tareas.map((tarea, index) => (
                            <Todo descripcion={tarea.descripcion} fecha={tarea.fecha} done={tarea.done}
                                onCheck={(estadoNuevo) => {
                                    const { setTareas } = this.props;
                                    const tareaActualizada = {
                                        ...tarea,
                                        done: estadoNuevo
                                    };
                                    setTareas(tareaActualizada, index);
                                }}
                                onDelete={(e) => {
                                    this.props.onDelete(index);
                                }}
                            />
                        ))
                    }
                </section>
            </section >
        );
    };
};
export default TodoList;