const Circle = require('./circle')
describe('Circle', ()=>{
    it(`should output circle color and dimensions`, ()=>{
        const color = 'blue';
        const circle = new Circle(color);
        expect(circle.render()).toEqual(`<circle cx='150' cy='110' r='60' stroke='transparent' fill='blue' stroke-width='5'/>`)
    })
})