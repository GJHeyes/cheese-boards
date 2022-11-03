const {Board,Cheese,User} = require('../models')
const db = require('./db')

async function seed(){
    await db.sync({
        force: true
    })

    await Board.bulkCreate([
        {
            type: 'test',
            description: 'test',
            rating: 0
        },
        {
            type: 'test',
            description: 'test',
            rating: 0
        },
        {
            type: 'test',
            description: 'test',
            rating: 0
        },
        {
            type: 'test',
            description: 'test',
            rating: 0
        },
        {
            type: 'test',
            description: 'test',
            rating: 0
        },
    ])

    await Cheese.bulkCreate([
        {
            title: 'test',
            description: 'test',
        },
        {
            title: 'test',
            description: 'test',
        },
        {
            title: 'test',
            description: 'test',
        },
        {
            title: 'test',
            description: 'test',
        },
        {
            title: 'test',
            description: 'test',
        },
        {
            title: 'test',
            description: 'test',
        },
        {
            title: 'test',
            description: 'test',
        },
    ])

    await User.bulkCreate([
        {
            name: 'test',
            email: 'test',
        },
        {
            name: 'test',
            email: 'test',
        },
        {
            name: 'test',
            email: 'test',
        },
        {
            name: 'test',
            email: 'test',
        },
        {
            name: 'test',
            email: 'test',
        },
        {
            name: 'test',
            email: 'test',
        },
        {
            name: 'test',
            email: 'test',
        },
        {
            name: 'test',
            email: 'test',
        },
        {
            name: 'test',
            email: 'test',
        },
    ])
}

seed()