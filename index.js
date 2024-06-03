// Your code here
class Polygon{
  constructor(sides){
    this.sides = sides
  }

  get countSides(){
    return this.sides.length
  }

  get perimeter(){
    return this.sides.reduce((acc, item) => acc + item)
  }
}

class Triangle extends Polygon{
  get isValid(){
    if (this.sides.length !== 3) {
      return false;
    }
    const [a, b, c] = this.sides
    return a + b > c && a + c > b && c + b > a
  }
}

class Square extends Polygon{
  get isValid(){
    if(this.sides.length !== 4){
      return false
    }
    const [a, b, c, d] = this.sides
    return a === b && c === d && c === d
  }

  get area(){
    return this.sides[0] ** 2
  }
}
