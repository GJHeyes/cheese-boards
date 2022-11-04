//const Cheese = require('./cheese.models')
const Cheese = require('../models/cheese.models')
const db = require('../db/db')
//const User = require('./user.models')

describe('Testing the cheese',()=>{
    beforeEach(async()=>{//before each test
        await db.sync({
            force: true
        })
    })
    
    test('Check a board can be created',async()=>{
        const cheese = await Cheese.create({title:'Mozzarella', description: `Mozzarella is a fresh, soft, stretched curd cheese`})
        expect(cheese.title).toBe('Mozzarella')
        expect(cheese.description).toBeTruthy()
        expect(cheese.id).toBeTruthy() 
    })

})