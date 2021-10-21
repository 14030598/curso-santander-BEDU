import React from 'react';
import PropTypes from 'prop-types';
import { Checkbox } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function Checkmark(props) {
    const { done, toggleTarea } = props;

    const handleChange = (event) => {
        toggleTarea(event.target.checked);
    };

    return (
        <span >
            <Checkbox aria-label='Checkbox done'
                checked={done}
                onChange={handleChange}
                icon={<CheckCircleOutlineIcon />}
                checkedIcon={<CheckCircleIcon />}
            />
        </span>
    );
};

Checkmark.propTypes = {
    done: PropTypes.bool,
    toggleTarea: PropTypes.func
};

export default Checkmark;