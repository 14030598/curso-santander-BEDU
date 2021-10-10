import './css/todo.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinusCircle } from '@fortawesome/free-solid-svg-icons';

class Todo extends React.Component {
    state = {
        done: false,
    };

    render() {
        return (
            <section className={`tarea ${this.state.done ? 'done' : 'pending'}`}>
                <section className={`tarea__container ${this.state.done ? 'done' : 'pending'}`}>
                    {this.state.done}
                    <input type="checkbox" className="tarea__estatus"
                        onClick={() => {
                            this.setState({ done: !this.state.done });
                        }}
                    />
                    <h5 className="tarea__fecha">{this.props.fecha}</h5>
                    <p className="tarea__descripcion">{this.props.descripcion}</p>
                    <div className={`tachar ${this.state.done ? 'done' : 'pending'}`}></div>
                    <FontAwesomeIcon icon={faMinusCircle} size="mini" color="red" />
                </section>
            </section>
        )
    };
}

export default Todo;