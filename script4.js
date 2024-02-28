class Circle{
    constructor(radius=1.0,color="red"){
        this.radius = radius;
        this.color = color;
    }
    getRadius(){
        return this.radius;
    }
    setRadius(radius){
        this.radius = radius;
    }
    getColor(){
        return this.color;
    }
    setColor(color){
        this.color=color;
    }
    toString(){
        return `Circle[radius=${this.radius},color=${this.color}]`;
    }
    getArea(){
        return Math.pow(this.radius,2)*Math.PI;
    }
    getCircumference(){
         return    (2* Math.PI* this.radius).toFixed(6);
    }
}
const myCircle = new Circle (1.0,"Red");
console.log(myCircle.toString());
console.log("Area:",myCircle.getArea());
console.log("Circumference:",myCircle.getCircumference());
