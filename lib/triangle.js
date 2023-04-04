const shapeCon = require('./shapeParent')
class Triangle extends shapeCon{
    render(){
        return `<polygon points='40, 150, 250 150, 150 36, 182' stroke='transparent' fill='${this.color}' stroke-width='5'/>`
    }
}
module.exports = Triangle