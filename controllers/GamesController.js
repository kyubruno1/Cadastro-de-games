const Games = require('../models/Games')

module.exports = class GamesController {
    static async getAll(req, res) {
        const allGames = await Games.findAll() 
        res.status(200).json({
            allGames: allGames
        })
    }

    static async create(req, res){
        const {name, category} = req.body
        let concluded = req.body.concluded
      
        if(concluded === '0') {
            concluded = false
        } else {
            concluded = true
        }

        await Games.create({name, category, concluded})

        res.status(200).json({message: 'Jogo salvo na base de dados!'})
    }

    static async delete(req, res){
        const id = req.params.id 

        await Games.destroy({where: {id:id}})

        res.status(200).json({message: 'Jogo deletado da base de dados'})
    }
}