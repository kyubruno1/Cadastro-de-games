const router = require('express').Router()
const GamesController = require('../controllers/GamesController')

router.get('/', GamesController.getAll)
router.post('/create', GamesController.create)
router.post('/delete/:id', GamesController.delete)


module.exports = router