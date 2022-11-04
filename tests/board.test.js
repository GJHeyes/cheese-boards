const Board = require('../models/board.models')
const db = require('../db/db')

describe('Testing the board', ()=>{
    beforeEach(async()=>{//before each test
        await db.sync({
            force: true
        })
    })
    
    test('Check a board can be created',async()=>{
        const board = await Board.create({type:'Cluck Me Sideways', description: `Nduja butter tossed fries topped with sweet chilli fried chicken and bacon bits, chipotle chicken quesadillas, 2 x bbq and ranch chicken burgers, fried chicken burrito, buffalo fried chicken mac n cheese, chive ranch chicken tenders, red cabbage and fennel slaw.`, rating: 4.5})
        expect(board.type).toBe('Cluck Me Sideways')
        expect(board.description).toBeTruthy()
        expect(board.rating).toBe(4.5)
        expect(board.id).toBeTruthy() 
    })

})