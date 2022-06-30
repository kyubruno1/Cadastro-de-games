const Games = require('../models/Games')

module.exports = class GamesController {
    static async getAll(req, res) {
        const allGames = await Games.findAll() 
        res.status(200).json({
            allGames: allGames
        })
    }

    static async createGame(req, res){
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

    static async deleteGame(req, res){
        const id = req.params.id 

        await Games.destroy({where: {id:id}})

        res.status(200).json({message: 'Jogo deletado da base de dados'})
    }

    static async showOne(req, res){
        const id = req.params.id

        const game = await Games.findOne({where: {id:id}})

        res.status(200).json({game})
    }

    static async editGame(req, res){
        const id = req.params.id
        const {name, category, concluded} = req.body

        //validations
        if(!name) {
            res.status(422).json({message: "O nome é obrigatório"})
            return
        }

        if(!category) {
            res.status(422).json({message: "A categoria é obrigatório"})
            return
        }

        if(!concluded) {
            res.status(422).json({message: "O status é obrigatório"})
            return
        }

        const gamesData = {
            id,
            name,
            category,
            concluded
        }

        await Games.update(gamesData, {where: {id:id}})

        res.status(200).json({gamesData})
    }
}