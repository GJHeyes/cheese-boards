//const Cheese = require('../models/cheese.models')
//const Board = require('./models/board.models')
const User = require('../models/user.models')
const db = require('../db/db')

describe('Testing the user', ()=>{
    beforeEach(async()=>{//before each test
        await db.sync({
            force: true
        })
    })
    
    test('Check a user can be created',async()=>{
        const user = await User.create({name:'Greg', email: 'test@test.co.uk'})
        expect(user.name).toBe('Greg')
        expect(user.id).toBeTruthy() 
    })

})