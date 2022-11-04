const {User, Board, Cheese }= require('../models')

const db = require('../db/db')

describe('Testing all classes work together', ()=>{
    beforeEach(async()=>{//before each test
        await db.sync({
            force: true
        })
    })
    
    test('Check a User can be assigned multiple boards',async()=>{
       const boards = await Board.bulkCreate([
        {type:'The Grilled Sharing Platter', description: "Chicken Tikka, Spicy Seekh Kebabs, Lamb Chops and Tandoori King Prawns, vegetable rice, katchumber salad, mango salad, Zouk’s signature hummus, freshly baked naan breads, stuffed roti and a range of chutneys and dips.", rating: 3.5},
        {type:'Cluck Me Sideways', description: "Nduja butter tossed fries topped with sweet chilli fried chicken and bacon bits, chipotle chicken quesadillas, 2 x bbq and ranch chicken burgers, fried chicken burrito, buffalo fried chicken mac n cheese, chive ranch chicken tenders, red cabbage and fennel slaw.", rating: 4.5}
       ])
       const user = await User.create({name:'Greg', email: 'test@test.co.uk'})
       user.addBoards(boards)
       //what do I put to check this?
    })

    test('Check a Board can be assigned multiple cheeses',async()=>{
        const cheeses = await Cheese.bulkCreate([
            {title:'Mozzarella', description: `Mozzarella is a fresh, soft, stretched curd cheese`},
            {title:'Cheddar', description: `This sharp cow's milk cheese is one of the most popular cheeses in the world today`}
        ])
        const boards = await Board.bulkCreate([
         {type:'The Grilled Sharing Platter', description: "Chicken Tikka, Spicy Seekh Kebabs, Lamb Chops and Tandoori King Prawns, vegetable rice, katchumber salad, mango salad, Zouk’s signature hummus, freshly baked naan breads, stuffed roti and a range of chutneys and dips.", rating: 3.5},
         {type:'Cluck Me Sideways', description: "Nduja butter tossed fries topped with sweet chilli fried chicken and bacon bits, chipotle chicken quesadillas, 2 x bbq and ranch chicken burgers, fried chicken burrito, buffalo fried chicken mac n cheese, chive ranch chicken tenders, red cabbage and fennel slaw.", rating: 4.5}
        ])

        boards[1].addCheeses(cheeses)
        
     })

    test('Check a Board can be assigned multiple cheeses and multiples cheeses can be assigned to multiple boards',async()=>{
    const cheeses = await Cheese.bulkCreate([
        {title:'Mozzarella', description: `Mozzarella is a fresh, soft, stretched curd cheese`},
        {title:'Cheddar', description: `This sharp cow's milk cheese is one of the most popular cheeses in the world today`}
    ])
    const boards = await Board.bulkCreate([
        {type:'The Grilled Sharing Platter', description: "Chicken Tikka, Spicy Seekh Kebabs, Lamb Chops and Tandoori King Prawns, vegetable rice, katchumber salad, mango salad, Zouk’s signature hummus, freshly baked naan breads, stuffed roti and a range of chutneys and dips.", rating: 3.5},
        {type:'Cluck Me Sideways', description: "Nduja butter tossed fries topped with sweet chilli fried chicken and bacon bits, chipotle chicken quesadillas, 2 x bbq and ranch chicken burgers, fried chicken burrito, buffalo fried chicken mac n cheese, chive ranch chicken tenders, red cabbage and fennel slaw.", rating: 4.5}
    ])

    await boards[1].addCheeses(cheeses)
    await cheeses[1].addBoards(boards)

    expect(await cheeses[1]).toBeTruthy()
    expect(await boards[1]).toBeTruthy()

    })

})