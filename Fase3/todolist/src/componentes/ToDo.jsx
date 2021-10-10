import './css/todo.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinusCircle } from '@fortawesome/free-solid-svg-icons';


class Todo extends React.Component {
    state = {
        done: this.props.done
    };

    render() {
        return (
            <section className={`tarea ${this.state.done ? 'done' : 'pending'}`}>
                <section className={`tarea__container ${this.state.done ? 'done' : 'pending'}`}>
                    {this.state.done}
                    <input type="checkbox" className="tarea__estatus"
                        onClick={(e) => {
                            e.preventDefault();
                            this.setState({ done: !this.state.done });
                            this.props.onCheck(!this.state.done);
                        }}
                    />
                    <h5 className="tarea__fecha">{this.props.fecha}</h5>
                    <p className="tarea__descripcion">{this.props.descripcion}</p>
                    <div className={`tachar ${this.state.done ? 'done' : 'pending'}`}></div>
                    <div className="tarea__delete"
                        onClick={e => {
                            e.preventDefault();
                            this.props.onDelete();
                        }}
                    >
                        <FontAwesomeIcon icon={faMinusCircle} size="xs" color="red" />
                    </div>

                </section>
            </section>
        )
    };
}

export default Todo;