import Todo from './Todo.jsx';
import "./css/todolist.css";

const TodoList = (props) => {
    return (
        <section className="lista-tareas">
            <section className="tareas">
                {props.tareas.map(tarea => (
                    <Todo descripcion={tarea[0]} fecha={tarea[1]} key={tarea.key} />
                ))}
            </section>
        </section>
    );
};
export default TodoList;