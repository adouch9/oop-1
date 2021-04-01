let alice = {
    firstName: 'Alice',
    lastName : 'Liddell',
    age: 28,
    language: ['Html', 'Css'],

    }
    
    let bob = {
        firstName: 'Bob',
        lastName : 'Lemon',
        age: 30,
        language: ['Html', 'Css','Js','React'],
    }
    
    let charlie = {
        firstName: 'Charlie',
        lastName : 'Charlot',
        age: 8,
        language: ['Papa', 'Maman'],
    }

    const printInfo = (identiter) => {
        console.log(`first name: ${identiter.firstName}`)
        console.log(`last name: ${identiter.lastName}`)
        console.log(`age: ${identiter.age}`)   
    }
// printInfo(alice)
// printInfo(bob)
// printInfo(charlie)

const canVote = (droit) =>{
    let majeur = 18;
   
    return  droit.age >= majeur
    
}

// console.log(canVote(alice))
// console.log(canVote(charlie))


const mostSkilledDev = (nom1, nom2) => {

    if (nom1.language.length > nom2.language.length){
       return (nom1.firstName)
    }
    else if(nom1.language.length < nom2.language.length){
        return (nom2.firstName)
    }else{
        return ('draw')
    }

}

// console.log(mostSkilledDev(alice, charlie))



