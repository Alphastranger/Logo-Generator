const Triangle = require('./triangle')
describe('Triangle', ()=>{
    it(`should output triangle color and dimensions`, ()=>{
        const color = blue;
        const triangle = new Triangle();
        expect(triangle(color)).toEqual(`<circle cx='150' cy='110' r='60' stroke='transparent' fill='blue' stroke-width='5'/>`)
    })
})