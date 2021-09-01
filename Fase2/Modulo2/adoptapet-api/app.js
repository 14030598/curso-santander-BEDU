const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Configurando las rutas
app.use('/v1', require('./routes'));


// Inicia el servidor
const PORT = 4001;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en puerto ${PORT}`);
});
