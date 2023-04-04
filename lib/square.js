const shapeCon = require('./shapeParent')
class Square extends shapeCon{
    render(){
        return `<rect x='105' y='70' width='90' height='90' stroke='transparent' fill='${this.color}' stroke-width='5'/>`
    }
}
module.exports = Square