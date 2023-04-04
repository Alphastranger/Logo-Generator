const shapes = require('./shapes')

describe('shapes', ()=>{
   it (`should put out an svg file with an appropriate design`, ()=> {
    data = {
        shape: 'square',
        textColor: 'red',
        text: 'yes',
        color: 'blue'
    }
    expect(shapes(data)).toEqual(`<svg width='300' height='200' version='1.1' xmlns='http://www.w3.org/2000/svg'>
    <rect x='105' y='70' width='90' height='90' stroke='transparent' fill='blue' stroke-width='5'/>
    <text x='150' y='125' font-size='60' text-anchor='middle' fill='red'>yes</text>
    </svg>`)
   })
})
