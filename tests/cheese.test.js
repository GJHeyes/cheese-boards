//const Cheese = require('./cheese.models')
const Cheese = require('../models/cheese.models')
const db = require('../db/db')
//const User = require('./user.models')

describe('Testing the user',()=>{
    beforeEach(async()=>{//before each test
        await db.sync({
            force: true
        })
    })
    
    test('Check a board can be created',async()=>{
       const cheese = await Cheese.create({title:'Mozzarella', description: `Mozzarella is a fresh, soft, stretched curd cheese, made with whole cow's milk. Due to the fact that it has a fragrant aroma of fresh milk and a delicate creamy flavor, mozzarella is traditionally paired with light white wines. This Italian classic originates from the region of Campania, but nowadays it is produced all across the country.

       The cheese is made with water buffalo's milk or cow's milk, when it's often referred to as mozzarella fior di latte (in order to distinguish it from water buffalo milk mozzarella). The ancient tradition of making mozzarella cheese dates back to the 4th century BCE, however, the first official reference to its name was found in a 1570 cookery book by Bartolomeo Scappi, a famous Renaissance chef.
       
       It is an excellent table cheese used for preparing a number of different dishes and the essential ingredient of the caprese salad and the famous pizza napoletana.`})
       expect(cheese.title).toBe('Mozzarella')
       expect(cheese.description).toBeTruthy()
       expect(cheese.id).toBeTruthy() 
    })

})