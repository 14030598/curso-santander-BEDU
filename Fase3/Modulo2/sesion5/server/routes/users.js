var express = require('express');
var router = express.Router();
const db = require('../db');


/* POST users */
router.post('/', function (req, res) {
  const nuevo = db.models.Users.createOne(req.body);
  res.status(201).send({ usuarioNuevo: nuevo });
});

/*Find one users by id*/
router.get('/:id', function (req, res) {
  const finded = db.models.Users.findOne({ id: req.params.id });
  res.status(200).send({ usuario: finded });
});

/*remove one users by id*/
router.delete('/:id', function (req, res) {
  const eliminado = db.models.Users.remove({ id: req.params.id });
  res.status(200).send({ usuarioEliminado: eliminado });
});
/*remov one users by id*/
router.put('/:id', function (req, res) {
  const nuevo = db.models.Users.updateOne({ id: req.params.id }, req.body);
  res.status(200).send({ usuario: nuevo });
});

/* GET users listing. */
router.get('/', function (req, res, next) {
  const users = db.models.Users.findMany();
  res.send({ usuarios: users });
});
module.exports = router;
