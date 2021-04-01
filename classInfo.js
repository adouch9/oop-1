class Human {
    constructor(firstName, age, lastName, language) {
      this.firstName = firstName
      this.age = age
      this.lastName = lastName
      this.language = language
    }
    
 printInfo()  {
    console.log(`first name: ${this.firstName}`)
    console.log(`last name: ${this.lastName}`)
    console.log(`age: ${this.age}`)   
}

canVote(){
    let majeur = 18;
   return  this.age >= majeur
    
}

mostSkilledDev(p1) {

    if (this.language.length > p1.language.length){
      console.log(`elements plus grand: ${this.firstName}`)
    }
    // else if(p1.language.length > this.language.length ){
    //    console.log(`elements plus grand grand: ${p1.firstName}`)
    // }
    else if(this.language.length  < p1.language.length){
        console.log(`elements plus grand grand: ${p1.firstName}`)
     }
     
    
    else{
        console.log('draw')
    }
}
}


const alice = new Human('Alice', 27, 'Liddell', ['Html', 'Css'])
const bob = new Human('Bob', 30, 'Lemon', ['Html', 'Css','Js','React'])
const charlie = new Human('Charlie', 27, 'Charlot', ['Papa', 'Maman'])


// console.log(alice)
// console.log(alice.canVote())
bob.mostSkilledDev(alice)