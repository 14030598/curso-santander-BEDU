const router = require('express').Router();

const {
    createMascota,
    getMascotas,
    updateMascota,
    deleteMascota
} = require('../controllers/mascotas')
  
router.get('/', getMascotas);
router.get('/:id', getMascotas);
router.post('/', createMascota);
router.put('/:id', updateMascota);
router.delete('/:id', deleteMascota);

module.exports = router;