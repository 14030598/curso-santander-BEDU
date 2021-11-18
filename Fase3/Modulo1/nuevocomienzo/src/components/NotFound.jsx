import { Box, Stack, Paper } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import Lego from '../assets/404lego.png';

const Notfound = () => {
    return (
        <Box component="span" sx={{ p: 2, border: '1px dashed grey' }}>
            <Box textAlign="center"><h1>Pagina no encontrada</h1></Box>
            <Box textAlign="center">
                <img src={Lego} alt="No Encontrada" width={600} />
            </Box>
            <Box textAlign="center">
                <h1>Lego anda haciendo travesuras y <strong>HACKEO</strong> esta página</h1>
                <p>Que mala verdad</p>
                <Link to="/">
                    Volver
                </Link>
            </Box>
        </Box >
    );
}

export default Notfound;
