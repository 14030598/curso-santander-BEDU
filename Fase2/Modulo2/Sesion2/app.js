const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const PORT = 4001;

app.listen(PORT, () => {
    console.log(`Servidor escuchando en puerto ${PORT}`);
});





// const gods = [
//     { name: 'Zeus' }, 
//     { name: 'Hades' }, 
//     { name: 'Hermes' }
// ];
// intencion(get,put,delete,post), subdireccion(/url) y comportamiento en funcion de request y response
app.get('/gods', (req, res) => {
    res.send(gods);
});

const gods = { 
    Zeus: { live: 'Olympus', symbol: 'Thunderbolt' }, 
    Hades : { live : 'Underworld', symbol: 'Cornucopia' },
    Hermes : { live : 'no sé', symbol: 'tampoco sé' },
    Poseidon: { otro : 'no tiene nada'}
};

app.get('/gods/:nombre', (req, res) => {
    // const nombre = req.params.nombre;
    // res.send(gods[nombre]);
    // res.send(gods[req.params.nombre]);
    const dios = gods[req.params.nombre];

    if (dios) {
        res.send(dios);
    }else{
        res.status(404).send("No existe el Dios");
    }
});
  
app.put('/gods/:name', (req,res) => {
    const god = req.params.name;
    gods[god] = req.body;
    res.send(gods);
});

app.post('/gods', (req,res) => {
    const name = req.query.name;
    const info = req.body;
    gods[name] = info;
    res.status(200).send(gods);
});

app.delete('/gods/:name', (req,res) => {
    const name = req.params.name;
    delete gods[name];
    res.send(gods);
});





//reto 1
const constelaciones = {
    Andromeda : {
        abreviatura : 'And',
        superficie :  722.3,
        num_estrellas : 152,
        estr_mas_brillante : 'Alpheratz' 
    },
    Aquila : {
        abreviatura : 'Aql',
        superficie :  652.5,
        num_estrellas : 124,
        estr_mas_brillante : 'Altair' 
    },
    Ara : {
        abreviatura : 'Ara',
        superficie :  237.1,
        num_estrellas : 71,
        estr_mas_brillante : 'Beta Arae' 
    },
    Pegaso : {
        abreviatura : 'Peg',
        superficie :  1120.8,
        num_estrellas : 177,
        estr_mas_brillante : 'Enif' 
    },
};

app.get('/constelaciones', (req, res) => {
    res.send(constelaciones);
});

//reto2
app.get('/constelaciones/:nombre', (req, res) => {
    const constelacion = constelaciones[req.params.nombre];
    
    if (constelacion) 
        res.send(constelacion);
    else
        res.status(404).send("No existe la constelacion");
    
});

app.get('/constelaciones/:buscar/:parametros', (req, res) => {
    const opcion = req.params.buscar;
    const criterio = req.params.parametros;
    for (const item in constelaciones) {
        if (constelaciones[item][opcion] == criterio) {
            res.send(constelaciones[item]);
        }
        
    }
    res.status(404).send("No existe la constelacion ");
});

//reto 3
app.put('/constelaciones/:name', (req,res) => {
    const constelacion = req.params.name;
    constelaciones[constelacion] = req.body;
    res.send(constelaciones);
});

app.post('/constelaciones', (req,res) => {
    const name = req.query.name;
    const info = req.body;
    constelaciones[name] = info;
    res.status(200).send(constelaciones);
});

app.delete('/constelaciones/:name', (req,res) => {
    const name = req.params.name;
    if (delete constelaciones[name]){
        res.send(constelaciones)
    } else {
        res.status(500)
    }
});























// var express = require('express'),
// bodyParser = require('body-parser'),
// cors = require('cors');

// // Objeto global de la app
// var app = express();

// // configuración de middlewares
// app.use(cors());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// // Manejando los errores 404
// app.use(function(req, res, next) {
// var err = new Error('Not Found');
// err.status = 404;
// next(err);
// });

// // Iniciando el servidor...
// var server = app.listen(process.env.PORT || 3000, function(){
// console.log('Escuchando en el puerto ' + server.address().port);
// });