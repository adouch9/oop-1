class Point {
    constructor(x, y) {
      this.x = x
      this.y = y
    }
    show() {
      console.log(`(${this.x}, ${this.y})`)
    }
    isEqual(point) {
      return this.x === point.x && this.y === point.y ? true : false
    }
    distance(b){
    //this = A   b = B
        return Math.sqrt(Math.pow(b.x - this.x, 2) + Math.pow(b.y - this.y, 3))   
    }
  }





  exports.Point = Point