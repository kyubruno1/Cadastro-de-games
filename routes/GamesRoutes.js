const router = require('express').Router()
const GamesController = require('../controllers/GamesController')

router.get('/', GamesController.getAll)


module.exports = router