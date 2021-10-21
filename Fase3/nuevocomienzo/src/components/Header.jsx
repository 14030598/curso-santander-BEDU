import React from 'react';
import PropTypes from 'prop-types';
import { Header, Icon } from 'semantic-ui-react'

const MiHeader = (props) => {
    return (
        <>
            <Header as='h2' icon textAlign='center'>
                <Icon name='tasks' circular />
                <Header.Content>Tareas</Header.Content>
                <Header dividing>
                    Hay {props.counter} tareas
                </Header>
            </Header>

        </>
    );
}

MiHeader.propTypes = {
    counter: PropTypes.number
}

MiHeader.defaultProps = {
    counter: 0
}

export default MiHeader;

