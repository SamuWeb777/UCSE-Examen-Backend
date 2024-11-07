const express = require('express')
const router = express.Router()
// Traemos el controlador
const trailerController = require('../controllers/trailerController')

router.get('/', trailerController.gettrailer)
router.get('/genero', trailerController.gettrailersByGen)
router.get('/actor', trailerController.gettrailersByActor)
router.get('/temp', trailerController.gettrailersByxTemp)
router.get('/:id', trailerController.gettrailerById)
router.post('/', trailerController.createtrailer)
router.delete('/:id', trailerController.deletetrailer)

module.exports = router