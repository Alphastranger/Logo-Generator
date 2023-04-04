const Triangle = require('./triangle')
const Circle = require('./circle')
const Square = require('./square')
const shapes = (data) => {

    const square = new Square(data.color)
    const circle = new Circle(data.color)
    const triangle = new Triangle(data.color)
    if (data.shape === 'square') {
        return `<svg width='300' height='200' version='1.1' xmlns='http://www.w3.org/2000/svg'>
    ${square.render()}
    <text x='150' y='125' font-size='60' text-anchor='middle' fill='${data.textColor}'>${data.text}</text>
    </svg>`
    } else if (data.shape === 'triangle') {
        return `<svg width='300' height='200' version='1.1' xmlns='http://www.w3.org/2000/svg'>
    ${triangle.render()}
    <text x='150' y='125' font-size='60' text-anchor='middle' fill='${data.textColor}'>${data.text}</text>
    </svg>`
    } else if (data.shape === 'circle') {
        return `<svg width='300' height='200' version='1.1' xmlns='http://www.w3.org/2000/svg'>
   ${circle.render()}
    <text x='150' y='125' font-size='60' text-anchor='middle' fill='${data.textColor}'>${data.text}</text>
    </svg>`
    }

}
module.exports = shapes;