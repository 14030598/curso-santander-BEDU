import React from 'react';
import './css/deleteAll.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faBroom } from '@fortawesome/free-solid-svg-icons';

const Deleteall = (props) => {
    return (
        <div className="delete">
            <FontAwesomeIcon icon={faTrash} size="1x" color="white"
                onClick={(e) => {
                    e.preventDefault();
                    // alert("Seguro que desea eliminar todas las tareas??");
                    props.onDelete();
                }}
            />
            <FontAwesomeIcon icon={faBroom} size="1x" color="white"
                onClick={(e) => {
                    e.preventDefault();
                    // alert("Seguro que desea eliminar todas las tareas??");
                    props.onClean();
                }}
            />
        </div>
    );
}

export default Deleteall;
