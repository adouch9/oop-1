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
       return (this.firstName)
    }
    else if(this.language.length < p1.language.length){
        return (p1.firstName)
    }else{
        return ('draw')
    }

}

}


const alice = new Human('Alice', 27, 'Liddell', ['Html', 'Css'])
const bob = new Human('Bob', 30, 'Lemon', ['Html', 'Css','Js','React'])
const charlie = new Human('Charlie', 27, 'Charlot', ['Papa', 'Maman'])


console.log(alice)
console.log(alice.canVote())
console.log(alice.mostSkilledDev(bob))