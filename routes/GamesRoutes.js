const router = require('express').Router()
const GamesController = require('../controllers/GamesController')

router.get('/', GamesController.getAll)
router.post('/create', GamesController.createGame)
router.post('/delete/:id', GamesController.deleteGame)
router.get('/:id', GamesController.showOne)
router.patch('/edit/:id', GamesController.editGame)


module.exports = router