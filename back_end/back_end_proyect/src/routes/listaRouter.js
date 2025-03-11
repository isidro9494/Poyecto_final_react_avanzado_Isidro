const express = require('express')
const { 
    getAllDonutsController
  } = require('../controllers/listaDonutsController')
const router = express.Router()

router.get('/', getAllDonutsController)

module.exports = router