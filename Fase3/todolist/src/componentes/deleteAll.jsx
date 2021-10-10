import React from 'react';
import './css/deleteAll.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const Deleteall = () => {
    return (
        <div className="delete">
            <FontAwesomeIcon icon={faTrash} size="2x" color="white"
                onClick={() => {
                    alert("holand");
                }}
            />
        </div>
    );
}

export default Deleteall;
