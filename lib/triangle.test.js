const Triangle = require('./triangle')
describe('Triangle', ()=>{
    it(`should output triangle color and dimensions`, ()=>{
        const color = 'blue';
        const triangle = new Triangle(color);
        expect(triangle.render()).toEqual(`<polygon points='40, 150, 250 150, 150 36, 182' stroke='transparent' fill='blue' stroke-width='5'/>`)
    })
})