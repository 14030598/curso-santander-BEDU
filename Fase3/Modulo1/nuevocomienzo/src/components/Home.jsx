import React from 'react';
import PropTypes from 'prop-types';
import MiHeader from './Header';
import Form from './Form';
import { Segment, Grid } from 'semantic-ui-react';
import { Switch } from '@mui/material';
import ToDoList from './ToDoList';


function Home(props) {
    const { ToDos, ToDo, show, addTarea, handleChange, handleClickToggleDone, handleClickDelete, handleClickEdit } = props;
    return (
        <div>
            <MiHeader counter={ToDos.length} />
            <Segment clearing color="teal">
                <Grid >
                    <Grid.Column width={8}>
                        <Form addTarea={addTarea} />
                    </Grid.Column>
                    <Grid.Column>
                    </Grid.Column>
                    <Grid.Column width={7} textAlign="right">
                        Mostrar tareas hechas
                        <Switch aria-label='ShowHide' checked={show} onChange={handleChange} />
                    </Grid.Column>
                </Grid>
            </Segment>
            <ToDoList
                tareas={show ? ToDos : ToDo}
                toggleTarea={handleClickToggleDone}
                deleteTarea={handleClickDelete}
                editTarea={handleClickEdit}
            />
        </div>
    );
};


Home.propTypes = {

};


export default Home;
