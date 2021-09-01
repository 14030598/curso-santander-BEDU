const router = require('express').Router();

const {
    createUsuario,
    getUsuarios,
    updateUsuario,
    deleteUsuario
} = require('../controllers/usuarios')
  
router.get('/', getUsuarios);
router.post('/', createUsuario);
router.put('/:id', updateUsuario);
router.delete('/:id', deleteUsuario);

module.exports = router;