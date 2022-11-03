const Cheese = require('./cheese.models')
const Board = require('./board.models')
const User = require('./user.models')

User.hasMany(Board)
Board.belongsTo(User)

Board.belongsToMany(Cheese, {through: 'Board_Cheese'})
Cheese.belongsToMany(Board, {through: 'Board_Cheese'})

module.exports = ({Cheese,Board,User})