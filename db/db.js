const {Sequelize} = require('sequelize')
//const path = require('path') //where does path come from?

const db = new Sequelize({
    dialect: 'sqlite',
    //storage: path.join(__dirname, 'cheeseBoards.sqlite'),
    storage: ":memory:",
    logging: false
})

module.exports = db