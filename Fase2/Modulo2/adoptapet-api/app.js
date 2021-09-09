const express = require('express');
const bodyParser = require('body-parser');
const app = express();
// const cors = require('cors');

// app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Configuracion a base de datos
const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://dbZorin:admin@cluster0.dqem4.mongodb.net/Adoptpet?retryWrites=true&w=majority");
mongoose.set("debug", true);

//importar los Schemas
require('./models/Usuario');
require('./models/Mascota');
require('./models/Solicitud');

//Configurando las rutas
app.use('/v1', require('./routes'));

// Inicia el servidor
const PORT = 4001;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en puerto ${PORT}`);
});