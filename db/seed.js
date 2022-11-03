const {Board,Cheese,User} = require('../models')
const db = require('./db')

async function seed(){
    await db.sync({
        force: true
    })

    await Board.bulkCreate([

    ])

    await Cheese.bulkCreate([

    ])

    await User.bulkCreate([

    ])
}

seed()