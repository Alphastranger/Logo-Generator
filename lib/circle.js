const shapeCon = require('./shapeParent')
class Circle extends shapeCon{
    render(){
        return `<circle cx='150' cy='110' r='60' stroke='transparent' fill='${this.color}' stroke-width='5'/>`
    }
}
module.exports = Circle