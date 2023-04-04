const Square= require('./square')
describe('Square', ()=>{
    it(`should output square color and dimensions`, ()=>{
        const color = 'blue';
        const square = new Square(color);
        expect(square.render()).toEqual( `<rect x='105' y='70' width='90' height='90' stroke='transparent' fill='blue' stroke-width='5'/>`)
    })
})