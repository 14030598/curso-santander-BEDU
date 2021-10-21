import React from 'react';
import PropTypes from 'prop-types';

import IconButton from '@mui/material/IconButton';
import { Cancel as DeleteIcon, Edit as EditIcon } from '@mui/icons-material';

import Checkmark from './Checkmark';
import '../scss/ToDo.scss';

function ToDo(props) {
    const { title, done, toggleTarea, deleteTarea, editTarea } = props;

    return (
        <>
            <div className="todo__list">
                <div className={`todo__title ${done ? 'hide' : 'show'}`}>
                    <span>{title}</span>
                </div>
                <span className="todo__actions">
                    <IconButton aria-label="edit" onClick={e => editTarea(e)} className="actions__edit" >
                        <EditIcon color="success" />
                    </IconButton>
                    <IconButton aria-label="close" onClick={e => deleteTarea(e)} className="actions__delete" >
                        <DeleteIcon sx={{ color: '#FF0000' }} />
                    </IconButton>
                    <Checkmark
                        done={done}
                        toggleTarea={toggleTarea}
                    />
                </span>

            </div>
        </>
    );
};


ToDo.propTypes = {
    done: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    toggleTarea: PropTypes.func.isRequired,
    deleteTarea: PropTypes.func.isRequired,
    editTarea: PropTypes.func.isRequired
}

export default ToDo;