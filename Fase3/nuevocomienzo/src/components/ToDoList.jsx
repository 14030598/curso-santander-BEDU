import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'semantic-ui-react';
import ToDo from './ToDo';

function ToDoList(props) {
    const { tareas, toggleTarea, deleteTarea, editTarea } = props;
    return (
        <>
            <List animated divided verticalAlign='middle'>
                {
                    tareas.map((tarea, index) => (
                        < List.Item key={tarea.id} >
                            <List.Content>
                                <List.Header>
                                    < ToDo
                                        key={tarea.id}
                                        done={tarea.done}
                                        title={tarea.title}
                                        toggleTarea={(e) => toggleTarea(e, tarea.id)}
                                        deleteTarea={(e) => deleteTarea(e, tarea.id)}
                                        editTarea={(e) => editTarea(e, tarea.id)}
                                    />
                                </List.Header>
                            </List.Content>
                        </List.Item>
                    ))
                }
            </List>
        </>
    );
};


ToDoList.propTypes = {
    tareas: PropTypes.array,
    toggleTarea: PropTypes.func,
    deleteTarea: PropTypes.func,
    editTarea: PropTypes.func
};
ToDoList.defaultProps = {
    tareas: []
}

export default ToDoList;
