// this used for object types only 
interface Rectangle {
    height: number ,
    width: number ,
};

const rectangle: Rectangle = {
    height: 20 ,
    width: 30 
}

console.log(rectangle)


interface ColoredRectangle extends Rectangle {
    color: string
} 

const  coloredRectangle: ColoredRectangle = {
    height:34 ,
    width: 50 ,
    color: "RED"
}

console.log(coloredRectangle)