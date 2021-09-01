const Usuario = require('../models/Usuario');

// CRUD
function createUsuario(req, res) {
    const usuario = new Usuario(req.body);
    res.status(200).send(usuario);
}

function getUsuarios(req, res) {
    // Simulando dos usuarios y respondiendolos
    var usuario1 = new Usuario(1, 'juancho', 'Juan', 'Vega', 'juan@vega.com', 'abc', 'normal');
    var usuario2 = new Usuario(2, 'monse', 'Monserrat', 'Vega', 'mon@vega.com', 'abc', 'anunciante');
    res.send([usuario1,usuario2]);
}

function updateUsuario(req, res) {
    var usuario = new Usuario(req.params.id, 'juancho', 'Juan', 'Vega', 'juan@vega.com', 'abc', 'normal');
    const modificaciones = req.body;
    usuario = {...usuario, ...modificaciones};
    res.send(usuario);
}

function deleteUsuario(req, res) {
    // se simula una eliminación de usuario, regresando un 200
    res.status(200).send(`Usuario ${req.params.id} eliminado`);
}

// exportamos las funciones definidas
module.exports = {
    createUsuario,
    getUsuarios,
    updateUsuario,
    deleteUsuario
}