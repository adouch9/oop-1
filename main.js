const { Point} = require ('./point.js')
const { Human} = require ('./classInfo.js')


const alice = new Human('Alice', 27, 'Liddell', ['Html', 'Css'])
const bob = new Human('Bob', 30, 'Lemon', ['Html', 'Css','Js','React'])
const charlie = new Human('Charlie', 27, 'Charlot', ['Papa', 'Maman'])

  // p1 est une instance de Point
  const p1 = new Point(1, 2)
  // p2 est une autre instance de Point
  const p2 = new Point(10, 11)


console.log(p1.isEqual(p1))
console.log(p1.distance(p2))
console.log(alice)
console.log(alice.canVote())
bob.mostSkilledDev(alice)

