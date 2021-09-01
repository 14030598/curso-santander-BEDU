const Mascota = require('../models/Mascota');

// CRUD
function createMascota(req, res) {
    const mascota = new Mascota(req.body);
    res.status(200).send(mascota);
}

function getMascotas(req, res) {
    // Simulando dos mascotas y respondiendolos
    var mascota1 = new Mascota(1, 'Pelichina', 'Perro', 'fotos', 'Blanca', 'anunciante', 'aqui');
    var mascota2 = new Mascota(2, 'Pelusa', 'Gato', 'fotos', 'Tambien blanca', 'anunciante', 'alla');
    res.send([mascota1,mascota2]);
}

function updateMascota(req, res) {
    var mascota = new Mascota(req.params.id, 'Pelusa', 'Gato', 'fotos', 'Tambien blanca', 'anunciante', 'alla');
    const modificaciones = req.body;
    mascota = {...mascota, ...modificaciones};
    res.send(mascota);
}

function deleteMascota(req, res) {// se simula una eliminación de mascota, regresando un 200
    res.status(200).send(`Mascota ${req.params.id} eliminado`);
}

// exportamos las funciones definidas
module.exports = {
    createMascota,
    getMascotas,
    updateMascota,
    deleteMascota
}