const Board = require('../models/board.models')
const db = require('../db/db')

describe('Testing the user', ()=>{
    beforeEach(async()=>{//before each test
        await db.sync({
            force: true
        })
    })
    
    test('Check a cheese can be created',async()=>{
       const board = await Board.create({type:'Cluck Me Sideways', description: 'This Chorlton institution are known throughout the world for their monumental sharing platters, which always seem to tend to turn up on my Instagram feed at the exact moment when I’m starving and could eat every single thing on the tray. They have three massive platters on offer, but I’ve chosen the Cluck Me Sideways which comes loaded with nduja butter tossed fries topped with sweet chilli fried chicken and bacon bits, chipotle chicken quesadillas, 2 x bbq and ranch chicken burgers, fried chicken burrito, buffalo fried chicken mac n cheese, chive ranch chicken tenders, red cabbage and fennel slaw.', rating: 4.5})
       expect(board.type).toBe('Cluck Me Sideways')
       expect(board.type).toBeTruthy()
       expect(board.rating).toBe(4.5)
       expect(board.id).toBeTruthy() 
    })

})