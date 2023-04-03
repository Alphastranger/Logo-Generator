class shapeCon 
   { constructor (stroke, fill, strokeWidth){
        this.stroke = stroke;
        this.fill = fill;
        this.strokeWidth = strokeWidth
    }
}

// function Square(stroke, fill, strokeWidth, x, y, width, height){
//     shapeCon.call(this, stroke, fill, strokeWidth)
//     this.x = x;
//     this.y = y;
//     this.width = width;
//     this.height = height;
// }
// class Square extends shapeCon{
//     render(){
//         return `<rect x='10' y='10' width='30' height='30' stroke='black' fill='${data.color}' stroke-width='5'/>`
//     }
// }
// function Circle(stroke, fill, strokeWidth, cx, cy, r){
//     shapeCon.call(this, stroke, fill, strokeWidth)
//     this.cx = cx;
//     this.cy = cy;
//     this.r = r;
// }
// class Circle extends shapeCon{
//     render(){
//         return `<circle cx='25' cy='75' r='20' stroke='black' fill='${data.color}' stroke-width='5'`
//     }
// }
// function Triangle(stroke, fill, strokeWidth, points){  
//     shapeCon.call(this, stroke, fill, strokeWidth)
//     this.points = points;
//     }
// class Triangle extends shapeCon{
//     render(){
//         return `<polygon points='5, 150, 18 244, 182 56, 182' stroke='black' fill='${data.color}' stroke-width='5'/>`
//     }
// }
const shapes = (data) => {
    class Square extends shapeCon{
        render(){
            return `<rect x='105' y='70' width='90' height='90' stroke='transparent' fill='${data.color}' stroke-width='5'/>`
        }
    }
    class Circle extends shapeCon{
        render(){
            return `<circle cx='150' cy='110' r='60' stroke='transparent' fill='${data.color}' stroke-width='5'/>`
        }
    }
    class Triangle extends shapeCon{
        render(){
            return `<polygon points='40, 150, 250 150, 150 36, 182' stroke='transparent' fill='${data.color}' stroke-width='5'/>`
        }
    }
    const square = new Square()
const circle = new Circle()
const triangle = new Triangle()
    if (data.shape === 'square'){ 
    return `<svg width='300' height='200' version='1.1' xmlns='http://www.w3.org/2000/svg'>
    ${square.render()}
    <text x='150' y='125' font-size='60' text-anchor='middle' fill='${data.textColor}'>${data.text}</text>
    </svg>`
    } else if (data.shape === 'triangle'){
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
module.exports=shapes;