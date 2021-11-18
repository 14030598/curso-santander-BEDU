import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Form, Input } from 'semantic-ui-react';
import { Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

function Formulario(props) {
    const { addTarea } = props;
    const [title, setTitle] = useState('');

    const handleChange = (e) => {
        setTitle(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title === '')
            alert('No puede estar el campo vacio');
        else
            addTarea({
                id: (+new Date()).toString(),
                title: title,
                done: false
            });
        setTitle('');
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Field inline>
                <Input
                    placeholder='Nueva Tarea'
                    onChange={handleChange}
                    value={title} />
                <Button variant="contained" endIcon={<SendIcon />}>
                    Send
                </Button>
            </Form.Field>
        </Form>
    );
}

Formulario.propTypes = {
    addTarea: PropTypes.func.isRequired
}

export default Formulario;