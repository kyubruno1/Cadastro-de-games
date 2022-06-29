const Games = require('../models/Games')

module.exports = class GamesController {
    static async getAll(req, res) {
        const allGames = await Games.findAll() 
        res.status(200).json({
            allGames: allGames
        })
    }
}