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
            {title:'Cheddar', description: `This sharp cow's milk cheese is one of the most popular cheeses in the world today.`},
            {title:'Feta', description: `Feta is the most famous Greek cheese, affectionately called 'the princess of cheeses'.`},
            {title:'Ricotta', description: `Ricotta is a fresh, soft cheese made from sheep's, cow's, goat's or Italian water buffalo's milk.`},
            {title:'Brie de Meaux', description: `Brie de Meaux is a soft French cheese made from cow's milk.`},
            {title:'Camembert de Normandie', description: `Normandy's most famous and iconic cheese is made from raw cow's milk.`},
            {title:'Halloumi', description: `Made from fresh, full-fat sheep's or goat's milk or a mixture of both`},
            {title:'Stilton', description: `Its taste is acidic, fresh, and creamy with a texture that is open and crumbly, and the crust is moist and smooth.`},
            {title:'Cheshire', description: `English cow's milk cheese produced in Cheshire, Flintshire, Staffordshire, Shropshire, and Denbighshire.`},
            {title:'Pepper Jack', description: `Monterey Jack cheese is flavored with jalapeño peppers for a spicy kick.`}
        ])
        
        const boards = await Board.bulkCreate([
            {type:'The Grilled Sharing Platter', description: "Chicken Tikka, Spicy Seekh Kebabs, Lamb Chops and Tandoori King Prawns, vegetable rice, katchumber salad, mango salad, Zouk’s signature hummus, freshly baked naan breads, stuffed roti and a range of chutneys and dips.", rating: 3.5},
            {type:'Cluck Me Sideways', description: "Nduja butter tossed fries topped with sweet chilli fried chicken and bacon bits, chipotle chicken quesadillas, 2 x bbq and ranch chicken burgers, fried chicken burrito, buffalo fried chicken mac n cheese, chive ranch chicken tenders, red cabbage and fennel slaw.", rating: 4.5},
            {type:'Charcuterie, Cheese & Natural Wine', description: "Cheeses from The Crafty Cheese Man and bread from Holy Grain. Served with house pickles and a bottle of natty wine", rating: 4.5},
            {type:'Tabla Mixta', description: "Loads of cheese, meat and bread, and sinking beers (or wine).", rating: 4.5},
            {type:'Moroccan Meze', description: "Selection of salad, hummus, cheese, falafel, light filo pastry briouat filled with chicken, black olives and preserved lemon,roasted carrots with dates.", rating: 4.5},
        
        ])
        
        const users = await User.bulkCreate([
            {name:'Greg',email: 'greg@greg.co.uk'},
            {name:'Ash',email: 'ash@ash.co.uk'},
            {name:'Yemi',email: 'yemi@yemi.co.uk'},
            {name:'Rob',email: 'Rob@Rob.co.uk'},
            {name:'Danielle',email: 'danielle@danielle.co.uk'},
            {name:'Mike',email: 'mike@mike.co.uk'},
            {name:'Tim',email: 'tim@tim.co.uk'},
            {name:'Bernanrd',email: 'bernard@bernard.co.uk'}
        ])

    await boards[1].addCheeses(cheeses.slice(1))
    await users[0].addBoards(boards.slice(0,-3)) /// -3 is three away from the end


    const user1 = (await User.findByPk(1, {include: [{model: Board, include: [{model: Cheese}]}]})).toJSON()

    //console.log(user12)
    // //console.log(JSON.stringify(user1,null,2))
    expect(user1.Boards[1].Cheeses.length).toBe(9)
    // expect(await cheeses[1]).toBeTruthy()
    // expect(await boards[1]).toBeTruthy()

    })

})