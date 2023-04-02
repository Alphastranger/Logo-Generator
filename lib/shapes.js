function shapeCon (stroke, fill, strokeWidth){
        this.stroke = stroke;
        this.fill = fill;
        this.strokeWidth = strokeWidth
    }

function Square(stroke, fill, strokeWidth, x, y, width, height){
    shapeCon.call(this, stroke, fill, strokeWidth)
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
}
function Circle(stroke, fill, strokeWidth, cx, cy, r){
    shapeCon.call(this, stroke, fill, strokeWidth)
    this.cx = cx;
    this.cy = cy;
    this.r = r;
}
function Triangle(stroke, fill, strokeWidth, points){  
    shapeCon.call(this, stroke, fill, strokeWidth)
    this.points = points;
    }
const square = new Square('black',`${data.color}`, 5, 'x=10', 'y=10', 30, 30)
const circle = new Circle('black', `${data.color}`, 5, 25, 75, 20)
const triangle = new Triangle(`black`, `${data.color}`, `<polygon points ='5, 150, 18 244, 182 56, 182'`)
const shapes = (data) => {
    if (data.shape === 'square')
   { render() `<svg width='300' height='200' version='1.1' xmlns='http://www.w3.org/2000/svg'>
    <rect ${square.x} ${square.y} width='${square.width}' height='${square.height}' stroke=${square.stroke} fill=${data.color} 'stroke-width=${square.strokeWidth}'/>
    <text x='150' y='125' font-size='60' text-anchor='middle' fill=${data.textColor}>${data.text}</text>
    </svg>`} else if (data.shape === 'triangle'){
         render() `<svg width='300' height='200' version='1.1' xmlns='http://www.w3.org/2000/svg'>
    ${triangle.points} stroke='${triangle.stroke}' fill='${data.color} stroke-width='${triangle.strokeWidth}'/>
    <text x='150' y='125' font-size='60' text-anchor='middle' fill=${data.textColor}>${data.text}</text>
    </svg>`
    } else if (data.shape === 'circle') {
        render() `<svg width='300' height='200' version='1.1' xmlns='http://www.w3.org/2000/svg'>
    <circle cx='${circle.cx}' cy='${circle.cy}' r='${circle.r}' stroke='${circle.stroke}' fill='${data.color}' stroke-width'${triangle.strokeWidth}'
    <text x='150' y='125' font-size='60' text-anchor='middle' fill=${data.textColor}>${data.text}</text>
    </svg>`
    }

}
module.exports=shapes;